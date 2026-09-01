#!/usr/bin/env python3
# pyright: basic
from __future__ import annotations

import unittest
import importlib.util
from pathlib import Path

MODULE_PATH = Path(__file__).with_name("classify_production_ci.py")
spec = importlib.util.spec_from_file_location("classify_production_ci", MODULE_PATH)
assert spec and spec.loader
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class FakeVerifier:
    def __init__(self, result=False, error=None):
        self.result = result
        self.error = error
        self.calls = []

    def is_verified_release_merge(self, repository, sha, default_branch):
        self.calls.append((repository, sha, default_branch))
        if self.error:
            raise self.error
        return self.result


def push(branch, sha="a" * 40, message="ordinary commit"):
    return {
        "event_name": "push",
        "ref": f"refs/heads/{branch}",
        "after": sha,
        "repository": {"full_name": "team-telnyx/telnyx-cli", "default_branch": "main"},
        "head_commit": {"message": message},
    }


class ProductionCIWorkflowContractTests(unittest.TestCase):
    def test_full_ci_runs_complete_jest_suite(self):
        workflow = (MODULE_PATH.parents[1] / "workflows" / "ci.yml").read_text()
        self.assertIn("\n  test:\n", workflow)
        self.assertIn("name: test", workflow)
        self.assertIn("run: ./scripts/test", workflow)
        self.assertIn("needs: classify-production-ci", workflow)


class ClassificationTests(unittest.TestCase):
    def test_release_pr_runs_full_ci(self):
        event = {
            "event_name": "pull_request",
            "pull_request": {
                "head": {"ref": "release-please--branches--main"},
                "base": {"ref": "main"},
            },
            "repository": {"full_name": "team-telnyx/telnyx-cli", "default_branch": "main"},
        }
        decision = module.classify_event(event, FakeVerifier())
        self.assertTrue(decision.run_full)
        self.assertEqual("release_pr_full", decision.mode)

    def test_ordinary_pr_runs_full_ci(self):
        event = {
            "event_name": "pull_request",
            "pull_request": {"head": {"ref": "fix/example"}, "base": {"ref": "main"}},
            "repository": {"full_name": "team-telnyx/telnyx-cli", "default_branch": "main"},
        }
        decision = module.classify_event(event, FakeVerifier())
        self.assertTrue(decision.run_full)
        self.assertEqual("ordinary_pr_full", decision.mode)

    def test_next_push_is_lightweight(self):
        decision = module.classify_event(push("next"), FakeVerifier())
        self.assertFalse(decision.run_full)
        self.assertEqual("next_lightweight", decision.mode)

    def test_release_branch_push_is_deduplicated(self):
        decision = module.classify_event(push("release-please--branches--main"), FakeVerifier())
        self.assertFalse(decision.run_full)
        self.assertEqual("release_branch_push_lightweight", decision.mode)

    def test_verified_release_merge_skips_duplicate_full_ci(self):
        verifier = FakeVerifier(result=True)
        decision = module.classify_event(push("main"), verifier)
        self.assertFalse(decision.run_full)
        self.assertEqual("verified_release_merge_lightweight", decision.mode)
        self.assertEqual(1, len(verifier.calls))

    def test_unverified_default_push_runs_full_ci(self):
        decision = module.classify_event(push("main"), FakeVerifier(result=False))
        self.assertTrue(decision.run_full)
        self.assertEqual("ordinary_push_full", decision.mode)

    def test_api_failure_fails_safe_to_full_ci(self):
        decision = module.classify_event(push("main"), FakeVerifier(error=RuntimeError("503")))
        self.assertTrue(decision.run_full)
        self.assertEqual("ordinary_push_full", decision.mode)
        self.assertIn("verification unavailable", decision.reason)

    def test_other_branch_push_runs_full_ci(self):
        decision = module.classify_event(push("feature/example"), FakeVerifier())
        self.assertTrue(decision.run_full)
        self.assertEqual("ordinary_push_full", decision.mode)


class ReleaseMergeVerifierTests(unittest.TestCase):
    def make_api(self, *, tree_match=True, missing_check=None, ambiguous=False):
        sha = "a" * 40
        head = "b" * 40
        checks = [
            ("build", "github-actions"),
            ("lint", "github-actions"),
            ("test", "github-actions"),
            ("protected-paths", "github-actions"),
            ("release doctor", "github-actions"),
            ("Analyze (actions)", "github-actions"),
            ("Analyze (go)", "github-actions"),
            ("CodeQL", "github-advanced-security"),
        ]
        runs = [
            {
                "name": name,
                "status": "completed",
                "conclusion": "success",
                "app": {"slug": app},
                "completed_at": "2026-08-17T22:00:00Z",
            }
            for name, app in checks
            if name != missing_check
        ]
        pull = {
            "number": 85,
            "state": "closed",
            "merged_at": "2026-08-17T22:00:00Z",
            "merge_commit_sha": sha,
            "title": "release: 0.28.0",
            "base": {"ref": "main"},
            "head": {"ref": "release-please--branches--main", "sha": head},
        }
        pulls = [pull, dict(pull, number=86)] if ambiguous else [pull]
        payloads = {
            f"repos/team-telnyx/telnyx-cli/commits/{sha}/pulls?per_page=100": pulls,
            f"repos/team-telnyx/telnyx-cli/git/commits/{sha}": {"tree": {"sha": "c" * 40}},
            f"repos/team-telnyx/telnyx-cli/git/commits/{head}": {
                "tree": {"sha": ("c" if tree_match else "d") * 40}
            },
            f"repos/team-telnyx/telnyx-cli/commits/{head}/check-runs?per_page=100": {
                "check_runs": runs
            },
            f"repos/team-telnyx/telnyx-cli/commits/{head}/status": {
                "statuses": [{"context": "release-provenance", "state": "success"}]
            },
        }
        return module.StaticAPI(payloads), sha

    def test_exact_release_merge_with_exact_head_checks_is_verified(self):
        api, sha = self.make_api()
        verifier = module.GitHubReleaseMergeVerifier(api)
        self.assertTrue(verifier.is_verified_release_merge("team-telnyx/telnyx-cli", sha, "main"))

    def test_ambiguous_associated_release_prs_fail_closed(self):
        api, sha = self.make_api(ambiguous=True)
        verifier = module.GitHubReleaseMergeVerifier(api)
        self.assertFalse(verifier.is_verified_release_merge("team-telnyx/telnyx-cli", sha, "main"))

    def test_tree_mismatch_fails_closed(self):
        api, sha = self.make_api(tree_match=False)
        verifier = module.GitHubReleaseMergeVerifier(api)
        self.assertFalse(verifier.is_verified_release_merge("team-telnyx/telnyx-cli", sha, "main"))

    def test_missing_required_check_fails_closed(self):
        api, sha = self.make_api(missing_check="test")
        verifier = module.GitHubReleaseMergeVerifier(api)
        self.assertFalse(verifier.is_verified_release_merge("team-telnyx/telnyx-cli", sha, "main"))

    def test_non_success_release_provenance_status_fails_closed(self):
        api, sha = self.make_api()
        api.payloads[f"repos/team-telnyx/telnyx-cli/commits/{'b' * 40}/status"] = {
            "statuses": [{"context": "release-provenance", "state": "pending"}]
        }
        verifier = module.GitHubReleaseMergeVerifier(api)
        self.assertFalse(verifier.is_verified_release_merge("team-telnyx/telnyx-cli", sha, "main"))


if __name__ == "__main__":
    unittest.main()
