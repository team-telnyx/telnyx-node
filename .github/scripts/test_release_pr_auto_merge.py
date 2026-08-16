#!/usr/bin/env python3
# pyright: basic
"""Behavior tests for the trusted release-PR auto-merge gate."""

from __future__ import annotations

import copy
import unittest
import dataclasses
from unittest import mock

from release_pr_auto_merge import (
    GateError,
    GateConfig,
    GitHubClient,
    ReleasePRAutoMergeGate,
)

HEAD = "1" * 40
BASE = "2" * 40
NEXT = "3" * 40
STAGING = "4" * 40
CONFIG = "5" * 40
MERGE = "6" * 40


class FixtureClient:
    def __init__(self) -> None:
        self.merge_calls = []
        self.snapshot = self.good_snapshot()
        self.merge_result = {
            "state": "closed",
            "merged_at": "2026-08-16T00:20:00Z",
            "merge_commit_sha": MERGE,
        }

    @staticmethod
    def good_snapshot():
        checks = []
        for name, app in {
            "build": "github-actions",
            "lint": "github-actions",
            "test": "github-actions",
            "protected-paths": "github-actions",
            "release doctor": "github-actions",
            "Analyze (actions)": "github-actions",
            "Analyze (python)": "github-actions",
            "CodeQL": "github-advanced-security",
        }.items():
            checks.append(
                {
                    "name": name,
                    "head_sha": HEAD,
                    "status": "completed",
                    "conclusion": "success",
                    "app": {"slug": app},
                    "completed_at": "2026-08-16T00:10:00Z",
                    "id": len(checks) + 1,
                }
            )
        return {
            "repository": "team-telnyx/telnyx-python",
            "default_branch": "master",
            "default_sha": BASE,
            "next_sha": NEXT,
            "pr": {
                "number": 415,
                "state": "open",
                "draft": False,
                "title": "release: 4.174.0",
                "user": {"login": "ankitTelnyx", "id": 253082483},
                "labels": [{"name": "autorelease: pending"}],
                "base": {"ref": "master", "sha": BASE},
                "head": {
                    "ref": "release-please--branches--master--changes--next",
                    "sha": HEAD,
                    "repo": {"full_name": "team-telnyx/telnyx-python"},
                },
                "commits": 1,
            },
            "head_commit": {"sha": HEAD, "parents": [{"sha": BASE}]},
            "head_tree": {
                "src/telnyx/client.py": ("100644", "blob", "a" * 40),
                "CHANGELOG.md": ("100644", "blob", "b" * 40),
            },
            "next_tree": {
                "src/telnyx/client.py": ("100644", "blob", "a" * 40),
                "CHANGELOG.md": ("100644", "blob", "c" * 40),
            },
            "promotion": {
                "sha": NEXT,
                "subject": "feat: promote from staging %s" % STAGING,
                "body": "Release-As: 4.174.0\n",
                "staging_sha": STAGING,
                "reachable_from_next": True,
            },
            "staging_prs": [
                {
                    "state": "closed",
                    "merged_at": "2026-08-16T00:00:00Z",
                    "merge_commit_sha": STAGING,
                    "user": {"login": "ankitTelnyx", "id": 253082483},
                    "base": {"ref": "main"},
                    "head": {
                        "ref": "stlc/generate",
                        "repo": {"full_name": "team-telnyx/telnyx-python-staging"},
                    },
                    "body": (
                        "Generated from "
                        "https://github.com/team-telnyx/telnyx-sdk-config/commit/%s" % CONFIG
                    ),
                }
            ],
            "resolved_config_sha": CONFIG,
            "required_contexts": ["build", "lint", "test", "protected-paths"],
            "checks": checks,
        }

    def read_snapshot(self, _pr_number):
        return copy.deepcopy(self.snapshot)

    def merge(self, pr_number, expected_head):
        self.merge_calls.append((pr_number, expected_head))

    def read_merge_result(self, _pr_number):
        return copy.deepcopy(self.merge_result)


class SequenceClient(FixtureClient):
    def __init__(self, snapshots):
        super().__init__()
        self.snapshots = [copy.deepcopy(item) for item in snapshots]

    def read_snapshot(self, _pr_number):
        if len(self.snapshots) > 1:
            return self.snapshots.pop(0)
        return copy.deepcopy(self.snapshots[0])


class ReleasePRAutoMergeGateTests(unittest.TestCase):
    def gate(self, client, attempts=1, sleeps=None):
        config = dataclasses.replace(
            GateConfig.python(), max_poll_attempts=attempts, poll_seconds=0
        )
        return ReleasePRAutoMergeGate(
            config=config,
            client=client,
            sleep=(lambda seconds: sleeps.append(seconds)) if sleeps is not None else (lambda _: None),
        )

    def assert_blocked(self, client, message=""):
        with self.assertRaisesRegex(GateError, message or ".+"):
            self.gate(client).run(415, HEAD, True)
        self.assertEqual(client.merge_calls, [])

    def test_fully_attested_exact_head_is_ready_without_merging_in_dry_run(self):
        client = FixtureClient()
        result = self.gate(client).run(415, HEAD, True)
        self.assertEqual(result, {"status": "ready", "head_sha": HEAD, "dry_run": True})
        self.assertEqual(client.merge_calls, [])

    def test_config_inventory_contains_exactly_the_six_non_java_sdk_repositories(self):
        expected = {
            "team-telnyx/telnyx-python": ("master", "team-telnyx/telnyx-python-staging"),
            "team-telnyx/telnyx-ruby": ("master", "team-telnyx/telnyx-ruby-staging"),
            "team-telnyx/telnyx-go": ("main", "team-telnyx/telnyx-go-staging"),
            "team-telnyx/telnyx-node": ("master", "team-telnyx/telnyx-typescript-staging"),
            "team-telnyx/telnyx-php": ("master", "team-telnyx/telnyx-php-staging"),
            "team-telnyx/telnyx-cli": ("main", "team-telnyx/telnyx-cli-staging"),
        }
        for repository, values in expected.items():
            with self.subTest(repository=repository):
                config = GateConfig.for_repository(repository)
                self.assertEqual((config.default_branch, config.staging_repository), values)
        with self.assertRaisesRegex(GateError, "unsupported repository"):
            GateConfig.for_repository("team-telnyx/telnyx-java")

    def test_promotion_must_be_reachable_from_current_next(self):
        client = FixtureClient()
        client.snapshot["promotion"]["reachable_from_next"] = False
        self.assert_blocked(client, "reachable.*next")

    def test_short_staging_reference_in_promotion_resolves_to_full_immutable_sha(self):
        client = FixtureClient()
        client.snapshot["promotion"]["subject"] = "feat: promote from staging %s" % STAGING[:7]

        result = self.gate(client).run(415, HEAD, True)

        self.assertEqual(result["status"], "ready")

    def test_maintenance_staging_pr_uses_latest_generated_ancestor_for_config_provenance(self):
        client = FixtureClient()
        generated = copy.deepcopy(client.snapshot["staging_prs"])
        client.snapshot["staging_prs"][0]["head"]["ref"] = "ci/preserve-production-policy"
        client.snapshot["generated_staging_prs"] = generated
        client.snapshot["generated_staging_reachable"] = True

        result = self.gate(client).run(415, HEAD, True)

        self.assertEqual(result["status"], "ready")

    def test_identity_contract_rejects_each_mismatch(self):
        mutations = {
            "wrong repository": lambda s: s.update(repository="team-telnyx/other"),
            "wrong author login": lambda s: s["pr"]["user"].update(login="human"),
            "wrong author ID": lambda s: s["pr"]["user"].update(id=1),
            "forked head": lambda s: s["pr"]["head"]["repo"].update(full_name="fork/repo"),
            "wrong branch": lambda s: s["pr"]["head"].update(ref="feature/human"),
            "draft": lambda s: s["pr"].update(draft=True),
            "closed": lambda s: s["pr"].update(state="closed"),
            "missing label": lambda s: s["pr"].update(labels=[]),
            "malformed title": lambda s: s["pr"].update(title="release: v4.174"),
            "wrong base branch": lambda s: s["pr"]["base"].update(ref="next"),
            "stale base": lambda s: s["pr"]["base"].update(sha="7" * 40),
            "multiple commits": lambda s: s["pr"].update(commits=2),
            "wrong parent": lambda s: s["head_commit"]["parents"][0].update(sha="7" * 40),
        }
        for label, mutate in mutations.items():
            with self.subTest(label=label):
                client = FixtureClient()
                mutate(client.snapshot)
                self.assert_blocked(client)

    def test_expected_event_head_must_equal_current_pr_head(self):
        client = FixtureClient()
        with self.assertRaisesRegex(GateError, "stale PR head"):
            self.gate(client).run(415, "7" * 40, True)

    def test_non_release_tree_difference_blocks(self):
        client = FixtureClient()
        client.snapshot["head_tree"]["src/telnyx/client.py"] = (
            "100644", "blob", "7" * 40
        )
        self.assert_blocked(client, "non-release tree")

    def test_release_metadata_difference_is_allowed(self):
        client = FixtureClient()
        client.snapshot["head_tree"]["pyproject.toml"] = ("100644", "blob", "7" * 40)
        result = self.gate(client).run(415, HEAD, True)
        self.assertEqual(result["status"], "ready")

    def test_provenance_rejects_version_staging_shape_and_config_ambiguity(self):
        mutations = {
            "version": lambda s: s["promotion"].update(body="Release-As: 9.9.9\n"),
            "short staging SHA": lambda s: s["promotion"].update(staging_sha="1234"),
            "no staging PR": lambda s: s.update(staging_prs=[]),
            "multiple staging PRs": lambda s: s.update(staging_prs=s["staging_prs"] * 2),
            "wrong staging branch": lambda s: s["staging_prs"][0]["head"].update(ref="human"),
            "unmerged staging PR": lambda s: s["staging_prs"][0].update(merged_at=None),
            "multiple config URLs": lambda s: s["staging_prs"][0].update(
                body=s["staging_prs"][0]["body"] + "\n" + s["staging_prs"][0]["body"]
            ),
            "unresolved config": lambda s: s.update(resolved_config_sha="7" * 40),
        }
        for label, mutate in mutations.items():
            with self.subTest(label=label):
                client = FixtureClient()
                mutate(client.snapshot)
                self.assert_blocked(client)

    def test_missing_or_pending_required_check_times_out_fail_closed(self):
        for state in ("missing", "pending"):
            with self.subTest(state=state):
                client = FixtureClient()
                build = next(c for c in client.snapshot["checks"] if c["name"] == "build")
                if state == "missing":
                    client.snapshot["checks"].remove(build)
                else:
                    build.update(status="in_progress", conclusion=None)
                self.assert_blocked(client, "timed out")

    def test_failed_only_required_check_blocks(self):
        client = FixtureClient()
        build = next(c for c in client.snapshot["checks"] if c["name"] == "build")
        build.update(conclusion="failure")
        self.assert_blocked(client, "check failed: build")

    def test_successful_retry_supersedes_historical_failure_on_same_head(self):
        client = FixtureClient()
        failed = copy.deepcopy(next(c for c in client.snapshot["checks"] if c["name"] == "build"))
        failed.update(id=999, conclusion="cancelled", completed_at="2026-08-16T00:01:00Z")
        client.snapshot["checks"].append(failed)
        result = self.gate(client).run(415, HEAD, True)
        self.assertEqual(result["status"], "ready")

    def test_success_from_wrong_app_does_not_satisfy_check(self):
        client = FixtureClient()
        build = next(c for c in client.snapshot["checks"] if c["name"] == "build")
        build["app"]["slug"] = "untrusted-app"
        self.assert_blocked(client, "timed out")

    def test_live_ruleset_context_is_required_dynamically(self):
        client = FixtureClient()
        client.snapshot["required_contexts"].append("new-policy")
        self.assert_blocked(client, "timed out")

    def test_pending_check_can_become_successful_before_timeout(self):
        pending = FixtureClient.good_snapshot()
        next(c for c in pending["checks"] if c["name"] == "build").update(
            status="in_progress", conclusion=None
        )
        ready = FixtureClient.good_snapshot()
        client = SequenceClient([pending, ready, ready])
        sleeps = []
        result = self.gate(client, attempts=2, sleeps=sleeps).run(415, HEAD, True)
        self.assertEqual(result["status"], "ready")
        self.assertEqual(sleeps, [0])

    def test_second_attestation_blocks_head_base_or_next_drift(self):
        mutations = {
            "head": lambda s: s["pr"]["head"].update(sha="7" * 40),
            "base": lambda s: s.update(default_sha="7" * 40),
            "next": lambda s: s.update(next_sha="7" * 40),
        }
        for label, mutate in mutations.items():
            with self.subTest(label=label):
                first = FixtureClient.good_snapshot()
                second = FixtureClient.good_snapshot()
                mutate(second)
                client = SequenceClient([first, second])
                with self.assertRaises(GateError):
                    self.gate(client).run(415, HEAD, False)
                self.assertEqual(client.merge_calls, [])

    def test_live_mode_merges_only_the_attested_exact_head(self):
        client = FixtureClient()
        result = self.gate(client).run(415, HEAD, False)
        self.assertEqual(client.merge_calls, [(415, HEAD)])
        self.assertEqual(result["status"], "merged")
        self.assertEqual(result["merge_commit_sha"], MERGE)

    def test_merge_readback_must_prove_merged_state_and_full_sha(self):
        invalid = [
            {"state": "open", "merged_at": None, "merge_commit_sha": None},
            {"state": "closed", "merged_at": "now", "merge_commit_sha": "short"},
        ]
        for result in invalid:
            with self.subTest(result=result):
                client = FixtureClient()
                client.merge_result = result
                with self.assertRaisesRegex(GateError, "merge readback"):
                    self.gate(client).run(415, HEAD, False)

    def test_single_page_array_api_result_is_flattened_without_losing_items(self):
        client = GitHubClient(GateConfig.python(), "test-token")
        client._gh = lambda *_args: '[[{"number": 1}, {"number": 2}]]'

        result = client._api_pages("example")

        self.assertEqual(result, [{"number": 1}, {"number": 2}])

    def test_private_provenance_reads_use_the_cross_repository_token(self):
        client = GitHubClient(GateConfig.python(), "low-privilege-token")
        completed = mock.Mock(returncode=0, stderr="", stdout='{"sha":"%s"}' % STAGING)
        with mock.patch.dict("os.environ", {"MERGE_TOKEN": "cross-repository-token"}), mock.patch(
            "release_pr_auto_merge.subprocess.run", return_value=completed
        ) as run:
            result = client._provenance_api_json(
                "repos/team-telnyx/telnyx-python-staging/commits/%s" % STAGING[:7]
            )

        self.assertEqual(result["sha"], STAGING)
        self.assertEqual(run.call_args.kwargs["env"]["GH_TOKEN"], "cross-repository-token")
        self.assertNotEqual(run.call_args.kwargs["env"]["GH_TOKEN"], client.env["GH_TOKEN"])

    def test_private_provenance_reads_fail_closed_without_cross_repository_token(self):
        client = GitHubClient(GateConfig.python(), "low-privilege-token")
        with mock.patch.dict("os.environ", {}, clear=True), self.assertRaisesRegex(
            GateError, "cross-repository provenance token"
        ):
            client._provenance_api_json("repos/team-telnyx/telnyx-python-staging/commits/abcdef0")

    def test_privileged_gate_job_is_filtered_to_release_please_candidates(self):
        with open(
            ".github/workflows/release-pr-auto-merge.yml", encoding="utf-8"
        ) as workflow_file:
            workflow = workflow_file.read()
        self.assertIn(
            "startsWith(github.event.pull_request.head.ref, 'release-please--')", workflow
        )
        self.assertIn(
            "startsWith(github.event.pull_request.title, 'release: ')", workflow
        )
        self.assertIn("github.event.pull_request.state == 'open'", workflow)
        self.assertIn(
            "github.event.label.name == 'autorelease: pending'", workflow
        )

    def test_merge_uses_immediate_rest_put_and_never_enables_auto_merge(self):
        client = GitHubClient(GateConfig.python(), "test-token")
        completed = mock.Mock(
            returncode=0,
            stderr="",
            stdout='{"merged":true,"sha":"%s"}' % MERGE,
        )
        with mock.patch.dict("os.environ", {"MERGE_TOKEN": "test-token"}), mock.patch(
            "release_pr_auto_merge.subprocess.run", return_value=completed
        ) as run:
            client.merge(415, HEAD)

        command = run.call_args.args[0]
        self.assertEqual(
            command[:3],
            ["gh", "api", "repos/team-telnyx/telnyx-python/pulls/415/merge"],
        )
        self.assertIn("PUT", command)
        self.assertIn("merge_method=squash", command)
        self.assertIn("sha=%s" % HEAD, command)
        self.assertNotIn("pr", command)


if __name__ == "__main__":
    unittest.main()
