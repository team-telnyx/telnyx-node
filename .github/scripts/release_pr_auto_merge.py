#!/usr/bin/env python3
# pyright: basic, reportArgumentType=false, reportOptionalIterable=false, reportOptionalMemberAccess=false, reportOptionalSubscript=false
"""Fail-closed exact-head gate for generated Release Please PRs.

The privileged workflow executes this file from the trusted default branch.  It
never checks out or imports pull-request-controlled code.
"""

from __future__ import annotations

import os
import re
import sys
import json
import time
import argparse
import subprocess
import dataclasses
from typing import (
    Any,
    Set,
    Dict,
    List,
    Tuple,
    Mapping,
    Callable,
    Optional,
    Sequence,
)

SHA_RE = re.compile(r"^[0-9a-f]{40}$")
VERSION_RE = re.compile(r"^release: ([0-9]+\.[0-9]+\.[0-9]+)$")
CONFIG_URL_RE = re.compile(
    r"https://github\.com/team-telnyx/telnyx-sdk-config/commit/([0-9a-f]{40})(?![0-9a-f])"
)
PROMOTION_RE = re.compile(
    r"^(?:feat|fix|chore)(?:\([^)]*\))?!?: promote from staging ([0-9a-f]{7,40})$"
)
RELEASE_AS_RE = re.compile(r"(?m)^Release-As:\s*([0-9]+\.[0-9]+\.[0-9]+)\s*$")


class GateError(RuntimeError):
    """A deterministic fail-closed attestation failure."""


class ChecksPending(GateError):
    """Expected checks have not reached an accepted terminal state."""


@dataclasses.dataclass(frozen=True)
class GateConfig:
    repository: str
    default_branch: str
    staging_repository: str
    release_files: frozenset[str]
    expected_checks: Mapping[str, str]
    author_login: str = "ankitTelnyx"
    author_id: int = 253082483
    staging_default_branch: str = "main"
    staging_head_branch: str = "stlc/generate"
    max_poll_attempts: int = 120
    poll_seconds: int = 30

    @classmethod
    def for_repository(cls, repository: str) -> "GateConfig":
        github = "github-actions"
        advanced_security = "github-advanced-security"
        inventory = {
            "team-telnyx/telnyx-python": {
                "default_branch": "master",
                "staging_repository": "team-telnyx/telnyx-python-staging",
                "release_files": {
                    "CHANGELOG.md", "pyproject.toml", "src/telnyx/_version.py",
                    ".release-please-manifest.json",
                },
                "checks": {
                    "build": github, "lint": github, "test": github,
                    "protected-paths": github, "release doctor": github,
                    "Analyze (actions)": github, "Analyze (python)": github,
                    "CodeQL": advanced_security,
                },
            },
            "team-telnyx/telnyx-ruby": {
                "default_branch": "master",
                "staging_repository": "team-telnyx/telnyx-ruby-staging",
                "release_files": {
                    "CHANGELOG.md", "lib/telnyx/version.rb", "README.md",
                    "telnyx.gemspec", ".release-please-manifest.json",
                },
                "checks": {
                    "lint (rubocop)": github, "lint (sorbet)": github,
                    "lint (steep)": github, "test": github,
                    "protected-paths": github, "release doctor": github,
                    "Analyze (actions)": github, "Analyze (ruby)": github,
                    "CodeQL": advanced_security,
                },
            },
            "team-telnyx/telnyx-go": {
                "default_branch": "main",
                "staging_repository": "team-telnyx/telnyx-go-staging",
                "release_files": {
                    "CHANGELOG.md", "internal/version.go", "README.md",
                    ".release-please-manifest.json",
                },
                "checks": {
                    "build": github, "lint": github, "test": github,
                    "protected-paths": github, "Analyze (actions)": github,
                    "Analyze (go)": github, "CodeQL": advanced_security,
                },
            },
            "team-telnyx/telnyx-node": {
                "default_branch": "master",
                "staging_repository": "team-telnyx/telnyx-typescript-staging",
                "release_files": {
                    "CHANGELOG.md", "package.json", "src/version.ts",
                    ".release-please-manifest.json",
                },
                "checks": {
                    "build": github, "lint": github, "protected-paths": github,
                    "release doctor": github, "Analyze (actions)": github,
                    "Analyze (javascript-typescript)": github,
                    "CodeQL": advanced_security,
                },
            },
            "team-telnyx/telnyx-php": {
                "default_branch": "master",
                "staging_repository": "team-telnyx/telnyx-php-staging",
                "release_files": {
                    "CHANGELOG.md", "composer.json", "src/Version.php",
                    ".release-please-manifest.json",
                },
                "checks": {
                    "lint": github, "test": github, "protected-paths": github,
                    "release doctor": github, "Analyze (actions)": github,
                    "CodeQL": advanced_security,
                },
            },
            "team-telnyx/telnyx-cli": {
                "default_branch": "main",
                "staging_repository": "team-telnyx/telnyx-cli-staging",
                "release_files": {
                    "CHANGELOG.md", "pkg/cmd/version.go", "README.md",
                    ".release-please-manifest.json",
                },
                "checks": {
                    "build": github, "lint": github, "test": github,
                    "protected-paths": github, "release doctor": github,
                    "Analyze (actions)": github, "Analyze (go)": github,
                    "CodeQL": advanced_security,
                },
            },
        }
        values = inventory.get(repository)
        if values is None:
            raise GateError("unsupported repository: %s" % repository)
        return cls(
            repository=repository,
            default_branch=values["default_branch"],
            staging_repository=values["staging_repository"],
            release_files=frozenset(values["release_files"]),
            expected_checks=dict(values["checks"]),
        )

    @classmethod
    def python(cls) -> "GateConfig":
        return cls.for_repository("team-telnyx/telnyx-python")


@dataclasses.dataclass(frozen=True)
class Attestation:
    head_sha: str
    base_sha: str
    next_sha: str
    title: str
    version: str
    staging_sha: str
    config_sha: str


class ReleasePRAutoMergeGate:
    def __init__(
        self,
        config: GateConfig,
        client: Any,
        sleep: Callable[[float], None] = time.sleep,
    ) -> None:
        self.config = config
        self.client = client
        self.sleep = sleep

    def run(
        self,
        pr_number: int,
        expected_head: Optional[str],
        dry_run: bool,
    ) -> Dict[str, Any]:
        expected = expected_head or None
        for attempt in range(self.config.max_poll_attempts):
            snapshot = self.client.read_snapshot(pr_number)
            try:
                first = self._attest(snapshot, pr_number, expected)
                break
            except ChecksPending:
                if attempt + 1 >= self.config.max_poll_attempts:
                    raise GateError(
                        "timed out waiting for required exact-head checks"
                    ) from None
                self.sleep(self.config.poll_seconds)
        else:  # pragma: no cover - loop is intentionally bounded above
            raise GateError("timed out waiting for required exact-head checks")

        # Re-read every mutable input immediately before mutation.
        final_snapshot = self.client.read_snapshot(pr_number)
        final = self._attest(final_snapshot, pr_number, first.head_sha)
        if final != first:
            raise GateError("attested state changed before merge")

        if dry_run:
            return {"status": "ready", "head_sha": first.head_sha, "dry_run": True}

        self.client.merge(pr_number, first.head_sha, first.title)
        merged = self.client.read_merge_result(pr_number)
        merge_sha = merged.get("merge_commit_sha")
        if (
            merged.get("state") != "closed"
            or not merged.get("merged_at")
            or not isinstance(merge_sha, str)
            or not SHA_RE.fullmatch(merge_sha)
        ):
            raise GateError("merge readback did not prove an immutable merged state")
        return {
            "status": "merged",
            "head_sha": first.head_sha,
            "merge_commit_sha": merge_sha,
            "dry_run": False,
        }

    def _attest(
        self, snapshot: Mapping[str, Any], pr_number: int, expected_head: Optional[str]
    ) -> Attestation:
        self._require(snapshot.get("repository") == self.config.repository, "wrong repository")
        self._require(
            snapshot.get("default_branch") == self.config.default_branch,
            "unexpected default branch",
        )
        default_sha = self._full_sha(snapshot.get("default_sha"), "default SHA")
        next_sha = self._full_sha(snapshot.get("next_sha"), "next SHA")
        pr = self._mapping(snapshot.get("pr"), "PR")
        self._require(pr.get("number") == pr_number, "ambiguous PR result")
        self._require(pr.get("state") == "open", "PR is not open")
        self._require(pr.get("draft") is False, "PR is draft")

        title_match = VERSION_RE.fullmatch(str(pr.get("title", "")))
        self._require(title_match is not None, "malformed release title")
        version = title_match.group(1) if title_match else ""

        user = self._mapping(pr.get("user"), "PR author")
        self._require(user.get("login") == self.config.author_login, "wrong PR author login")
        self._require(user.get("id") == self.config.author_id, "wrong PR author ID")
        labels = pr.get("labels")
        self._require(isinstance(labels, list), "ambiguous PR labels")
        label_names = {
            item.get("name")
            for item in labels
            if isinstance(item, Mapping) and isinstance(item.get("name"), str)
        }
        self._require("autorelease: pending" in label_names, "missing autorelease label")

        base = self._mapping(pr.get("base"), "PR base")
        head = self._mapping(pr.get("head"), "PR head")
        head_repo = self._mapping(head.get("repo"), "PR head repository")
        self._require(base.get("ref") == self.config.default_branch, "wrong PR base branch")
        self._require(base.get("sha") == default_sha, "stale PR base SHA")
        self._require(
            head_repo.get("full_name") == self.config.repository,
            "forked PR head repository",
        )
        self._require(
            isinstance(head.get("ref"), str) and head["ref"].startswith("release-please--"),
            "wrong release branch",
        )
        head_sha = self._full_sha(head.get("sha"), "PR head SHA")
        if expected_head:
            self._require(self._full_sha(expected_head, "expected head SHA") == head_sha, "stale PR head")
        self._require(pr.get("commits") == 1, "release PR must contain exactly one commit")

        commit = self._mapping(snapshot.get("head_commit"), "head commit")
        self._require(commit.get("sha") == head_sha, "head commit mismatch")
        parents = commit.get("parents")
        self._require(isinstance(parents, list) and len(parents) == 1, "head must have one parent")
        parent = self._mapping(parents[0], "head parent")
        self._require(parent.get("sha") == default_sha, "head parent is not current base")

        self._attest_tree(snapshot)
        staging_sha, config_sha = self._attest_provenance(snapshot, version)
        self._attest_checks(snapshot, head_sha)
        return Attestation(
            head_sha,
            default_sha,
            next_sha,
            "release: %s" % version,
            version,
            staging_sha,
            config_sha,
        )

    def _attest_tree(self, snapshot: Mapping[str, Any]) -> None:
        head_tree = self._tree(snapshot.get("head_tree"), "PR head tree")
        next_tree = self._tree(snapshot.get("next_tree"), "next tree")
        head_filtered = {k: v for k, v in head_tree.items() if k not in self.config.release_files}
        next_filtered = {k: v for k, v in next_tree.items() if k not in self.config.release_files}
        self._require(head_filtered == next_filtered, "non-release tree differs from current next")

    def _attest_provenance(
        self, snapshot: Mapping[str, Any], version: str
    ) -> Tuple[str, str]:
        promotion = self._mapping(snapshot.get("promotion"), "promotion")
        self._require(
            promotion.get("reachable_from_next") is True,
            "promotion is not reachable from current next",
        )
        subject = str(promotion.get("subject", ""))
        match = PROMOTION_RE.fullmatch(subject)
        self._require(match is not None, "no unique current promotion provenance")
        staging_sha = self._full_sha(promotion.get("staging_sha"), "staging SHA")
        self._require(staging_sha.startswith(match.group(1)), "promotion staging SHA mismatch")
        release_versions = RELEASE_AS_RE.findall(str(promotion.get("body", "")))
        self._require(release_versions == [version], "promotion Release-As mismatch")

        staging_prs = snapshot.get("staging_prs")
        self._require(
            isinstance(staging_prs, list) and len(staging_prs) == 1,
            "staging SHA must resolve to exactly one merged PR",
        )
        staging_pr = self._mapping(staging_prs[0], "staging PR")
        self._require(staging_pr.get("state") == "closed" and staging_pr.get("merged_at"), "staging PR not merged")
        self._require(staging_pr.get("merge_commit_sha") == staging_sha, "staging merge SHA mismatch")
        staging_user = self._mapping(staging_pr.get("user"), "staging PR author")
        self._require(
            staging_user.get("login") == self.config.author_login
            and staging_user.get("id") == self.config.author_id,
            "wrong staging PR author",
        )
        staging_base = self._mapping(staging_pr.get("base"), "staging PR base")
        staging_head = self._mapping(staging_pr.get("head"), "staging PR head")
        staging_repo = self._mapping(staging_head.get("repo"), "staging head repository")
        self._require(staging_base.get("ref") == self.config.staging_default_branch, "wrong staging base")
        self._require(staging_repo.get("full_name") == self.config.staging_repository, "wrong staging repository")

        generated_prs = snapshot.get("generated_staging_prs", staging_prs)
        self._require(
            isinstance(generated_prs, list) and len(generated_prs) == 1,
            "staging provenance must resolve to exactly one generated ancestor PR",
        )
        self._require(
            snapshot.get("generated_staging_reachable", True) is True,
            "generated staging PR is not reachable from promoted staging SHA",
        )
        generated_pr = self._mapping(generated_prs[0], "generated staging PR")
        generated_user = self._mapping(generated_pr.get("user"), "generated staging PR author")
        generated_base = self._mapping(generated_pr.get("base"), "generated staging PR base")
        generated_head = self._mapping(generated_pr.get("head"), "generated staging PR head")
        generated_repo = self._mapping(generated_head.get("repo"), "generated staging repository")
        self._require(
            generated_pr.get("state") == "closed" and generated_pr.get("merged_at"),
            "generated staging PR not merged",
        )
        self._require(
            generated_user.get("login") == self.config.author_login
            and generated_user.get("id") == self.config.author_id,
            "wrong generated staging PR author",
        )
        self._require(
            generated_base.get("ref") == self.config.staging_default_branch,
            "wrong generated staging base",
        )
        self._require(
            generated_head.get("ref") == self.config.staging_head_branch,
            "wrong generated staging head",
        )
        self._require(
            generated_repo.get("full_name") == self.config.staging_repository,
            "wrong generated staging repository",
        )

        config_urls = CONFIG_URL_RE.findall(str(generated_pr.get("body") or ""))
        self._require(len(config_urls) == 1, "expected exactly one immutable SDK-config commit URL")
        config_sha = self._full_sha(config_urls[0], "SDK-config SHA")
        self._require(snapshot.get("resolved_config_sha") == config_sha, "SDK-config commit did not resolve exactly")
        return staging_sha, config_sha

    def _attest_checks(self, snapshot: Mapping[str, Any], head_sha: str) -> None:
        live = snapshot.get("required_contexts")
        self._require(isinstance(live, list), "ambiguous live required contexts")
        expected: Dict[str, str] = dict(self.config.expected_checks)
        for context in live:
            self._require(isinstance(context, str) and context, "invalid live required context")
            expected.setdefault(context, "github-actions")

        checks = snapshot.get("checks")
        self._require(isinstance(checks, list), "ambiguous check-run result")
        for name, app in expected.items():
            candidates = [
                check
                for check in checks
                if isinstance(check, Mapping)
                and check.get("name") == name
                and check.get("head_sha") == head_sha
                and isinstance(check.get("app"), Mapping)
                and check["app"].get("slug") == app
            ]
            successes = [
                check
                for check in candidates
                if check.get("status") == "completed" and check.get("conclusion") == "success"
            ]
            if successes:
                continue
            if any(check.get("status") != "completed" for check in candidates) or not candidates:
                raise ChecksPending("required exact-head check pending or missing: %s" % name)
            raise GateError("required exact-head check failed: %s" % name)

    @staticmethod
    def _mapping(value: Any, label: str) -> Mapping[str, Any]:
        if not isinstance(value, Mapping):
            raise GateError("ambiguous or missing %s" % label)
        return value

    @staticmethod
    def _tree(value: Any, label: str) -> Mapping[str, Any]:
        if not isinstance(value, Mapping):
            raise GateError("ambiguous or missing %s" % label)
        for path, record in value.items():
            if not isinstance(path, str) or not isinstance(record, (tuple, list)) or len(record) != 3:
                raise GateError("invalid %s record" % label)
        return value

    @staticmethod
    def _full_sha(value: Any, label: str) -> str:
        if not isinstance(value, str) or not SHA_RE.fullmatch(value):
            raise GateError("%s is not a full immutable SHA" % label)
        return value

    @staticmethod
    def _require(condition: bool, message: str) -> None:
        if not condition:
            raise GateError(message)


# The live GitHub client is deliberately below the pure attestation core so unit
# tests can exercise policy without network access.
class GitHubClient:
    def __init__(self, config: GateConfig, token: str) -> None:
        self.config = config
        self.env = dict(os.environ)
        self.env["GH_TOKEN"] = token

    def _gh(self, *args: str) -> str:
        command = ["gh", *args]
        completed = subprocess.run(command, env=self.env, text=True, capture_output=True)
        if completed.returncode != 0:
            raise GateError("GitHub command failed: %s: %s" % (" ".join(command[:4]), completed.stderr.strip()))
        return completed.stdout

    def _provenance_gh(self, *args: str) -> str:
        # A repository-scoped GITHUB_TOKEN cannot read the private staging and
        # SDK-config repositories. Use the existing cross-repository token only
        # for immutable provenance reads (and, separately, the final merge).
        token = os.environ.get("MERGE_TOKEN")
        if not token:
            raise GateError("missing cross-repository provenance token")
        env = dict(self.env)
        env["GH_TOKEN"] = token
        command = ["gh", *args]
        completed = subprocess.run(command, env=env, text=True, capture_output=True)
        if completed.returncode != 0:
            raise GateError(
                "GitHub provenance command failed: %s: %s"
                % (" ".join(command[:4]), completed.stderr.strip())
            )
        return completed.stdout

    def _api_json(self, endpoint: str) -> Any:
        output = self._gh("api", endpoint)
        payload = json.loads(output)
        if payload is None:
            raise GateError("ambiguous API response for %s" % endpoint)
        return payload

    def _provenance_api_json(self, endpoint: str) -> Any:
        payload = json.loads(self._provenance_gh("api", endpoint))
        if payload is None:
            raise GateError("ambiguous provenance API response for %s" % endpoint)
        return payload

    def _api_pages(self, endpoint: str, key: Optional[str] = None) -> List[Any]:
        output = self._gh("api", endpoint, "--paginate", "--slurp")
        pages = json.loads(output)
        if not isinstance(pages, list):
            raise GateError("ambiguous paginated API response for %s" % endpoint)
        values: List[Any] = []
        for page in pages:
            payload = page.get(key) if key and isinstance(page, Mapping) else page
            if not isinstance(payload, list):
                raise GateError("ambiguous paginated API response for %s" % endpoint)
            values.extend(payload)
        return values

    def _provenance_api_pages(self, endpoint: str, key: Optional[str] = None) -> List[Any]:
        output = self._provenance_gh("api", endpoint, "--paginate", "--slurp")
        pages = json.loads(output)
        if not isinstance(pages, list):
            raise GateError("ambiguous paginated provenance response for %s" % endpoint)
        values: List[Any] = []
        for page in pages:
            payload = page.get(key) if key and isinstance(page, Mapping) else page
            if not isinstance(payload, list):
                raise GateError("ambiguous paginated provenance response for %s" % endpoint)
            values.extend(payload)
        return values

    def read_snapshot(self, pr_number: int) -> Dict[str, Any]:
        repo = self.config.repository
        repo_data = self._api_json("repos/%s" % repo)
        if not isinstance(repo_data, Mapping):
            raise GateError("ambiguous repository response")
        pr = self._api_json("repos/%s/pulls/%s" % (repo, pr_number))
        default_branch = repo_data.get("default_branch")
        default_ref = self._api_json("repos/%s/git/ref/heads/%s" % (repo, default_branch))
        next_ref = self._api_json("repos/%s/git/ref/heads/next" % repo)
        default_sha = default_ref["object"]["sha"]
        next_sha = next_ref["object"]["sha"]
        head_sha = pr["head"]["sha"]
        self._fetch_attestation_objects(
            pr_number=pr_number,
            default_branch=str(default_branch),
            default_sha=str(default_sha),
            next_sha=str(next_sha),
            head_sha=str(head_sha),
        )
        head_commit = self._api_json("repos/%s/commits/%s" % (repo, head_sha))
        promotion = self._find_promotion(next_sha)
        staging_sha = promotion["staging_sha"]
        staging_prs = self._provenance_api_pages(
            "repos/%s/commits/%s/pulls?per_page=100" % (self.config.staging_repository, staging_sha)
        )
        generated_staging_prs = self._find_generated_staging_pr(staging_sha, staging_prs)
        config_urls: List[str] = []
        for staging_pr in generated_staging_prs:
            config_urls.extend(CONFIG_URL_RE.findall(str(staging_pr.get("body") or "")))
        resolved_config_sha = None
        if len(config_urls) == 1:
            config_commit = self._provenance_api_json(
                "repos/team-telnyx/telnyx-sdk-config/commits/%s" % config_urls[0]
            )
            resolved_config_sha = config_commit.get("sha")
        checks = self._api_pages(
            "repos/%s/commits/%s/check-runs?per_page=100" % (repo, head_sha), "check_runs"
        )
        required = self._required_contexts(default_branch)
        return {
            "repository": repo,
            "default_branch": default_branch,
            "default_sha": default_sha,
            "next_sha": next_sha,
            "pr": pr,
            "head_commit": head_commit,
            "head_tree": self._ls_tree(head_sha),
            "next_tree": self._ls_tree(next_sha),
            "promotion": promotion,
            "staging_prs": staging_prs,
            "generated_staging_prs": generated_staging_prs,
            "generated_staging_reachable": True,
            "resolved_config_sha": resolved_config_sha,
            "required_contexts": required,
            "checks": checks,
        }

    def _fetch_attestation_objects(
        self,
        pr_number: int,
        default_branch: str,
        default_sha: str,
        next_sha: str,
        head_sha: str,
    ) -> None:
        refspecs = [
            "refs/heads/%s:refs/remotes/origin/attested-default" % default_branch,
            "refs/heads/next:refs/remotes/origin/attested-next",
            "refs/pull/%s/head:refs/remotes/origin/attested-pr" % pr_number,
        ]
        completed = subprocess.run(
            ["git", "fetch", "--force", "--no-tags", "origin", *refspecs],
            text=True,
            capture_output=True,
        )
        if completed.returncode != 0:
            raise GateError("could not fetch immutable attestation objects")
        expected = {
            "refs/remotes/origin/attested-default": default_sha,
            "refs/remotes/origin/attested-next": next_sha,
            "refs/remotes/origin/attested-pr": head_sha,
        }
        for ref, sha in expected.items():
            resolved = subprocess.run(
                ["git", "rev-parse", "--verify", ref],
                text=True,
                capture_output=True,
            )
            if resolved.returncode != 0 or resolved.stdout.strip() != sha:
                raise GateError("fetched ref does not match API-pinned SHA: %s" % ref)

    def _find_promotion(self, next_sha: str) -> Dict[str, str]:
        self._gh("api", "repos/%s/commits/%s" % (self.config.repository, next_sha))
        output = subprocess.run(
            ["git", "log", "--first-parent", "--format=%H%x00%s%x00%b%x1e", "-n", "100", next_sha],
            text=True,
            capture_output=True,
        )
        if output.returncode != 0:
            raise GateError("could not inspect next first-parent history")
        matches = []
        for raw in output.stdout.split("\x1e"):
            fields = raw.strip().split("\x00", 2)
            if len(fields) != 3:
                continue
            sha, subject, body = fields
            match = PROMOTION_RE.fullmatch(subject)
            if match:
                staging_ref = match.group(1)
                resolved = self._provenance_api_json(
                    "repos/%s/commits/%s" % (self.config.staging_repository, staging_ref)
                )
                staging_sha = resolved.get("sha") if isinstance(resolved, Mapping) else None
                matches.append(
                    {
                        "sha": sha,
                        "subject": subject,
                        "body": body,
                        "staging_ref": staging_ref,
                        "staging_sha": staging_sha,
                        "reachable_from_next": True,
                    }
                )
                break
        if len(matches) != 1:
            raise GateError("no unique promotion found in next first-parent history")
        return matches[0]

    def _find_generated_staging_pr(
        self, staging_sha: str, source_prs: Sequence[Mapping[str, Any]]
    ) -> List[Mapping[str, Any]]:
        direct = [
            pr
            for pr in source_prs
            if isinstance(pr.get("head"), Mapping)
            and pr["head"].get("ref") == self.config.staging_head_branch
        ]
        if direct:
            if len(direct) != 1:
                raise GateError("ambiguous generated staging PR at promoted SHA")
            return direct

        commits = self._provenance_api_pages(
            "repos/%s/commits?sha=%s&per_page=100"
            % (self.config.staging_repository, staging_sha)
        )
        for commit in commits:
            if not isinstance(commit, Mapping) or not SHA_RE.fullmatch(str(commit.get("sha", ""))):
                raise GateError("ambiguous staging ancestry commit")
            pulls = self._provenance_api_pages(
                "repos/%s/commits/%s/pulls?per_page=100"
                % (self.config.staging_repository, commit["sha"])
            )
            generated = [
                pr
                for pr in pulls
                if isinstance(pr, Mapping)
                and isinstance(pr.get("head"), Mapping)
                and pr["head"].get("ref") == self.config.staging_head_branch
                and pr.get("merged_at")
            ]
            if generated:
                if len(generated) != 1:
                    raise GateError("ambiguous generated staging ancestor PR")
                return generated
        raise GateError("no generated staging ancestor in bounded history")

    def _ls_tree(self, sha: str) -> Dict[str, Tuple[str, str, str]]:
        completed = subprocess.run(
            ["git", "ls-tree", "-r", "--full-tree", sha], text=True, capture_output=True
        )
        if completed.returncode != 0:
            raise GateError("could not read exact Git tree %s" % sha)
        tree: Dict[str, Tuple[str, str, str]] = {}
        for line in completed.stdout.splitlines():
            metadata, path = line.split("\t", 1)
            mode, kind, object_sha = metadata.split(" ", 2)
            if path in tree:
                raise GateError("duplicate tree path: %s" % path)
            tree[path] = (mode, kind, object_sha)
        return tree

    def _required_contexts(self, branch: str) -> List[str]:
        rules = self._api_pages("repos/%s/rules/branches/%s?per_page=100" % (self.config.repository, branch))
        contexts: Set[str] = set()
        for rule in rules:
            if not isinstance(rule, Mapping) or rule.get("type") != "required_status_checks":
                continue
            parameters = rule.get("parameters")
            if not isinstance(parameters, Mapping):
                raise GateError("ambiguous required-status rule")
            values = parameters.get("required_status_checks")
            if not isinstance(values, list):
                raise GateError("ambiguous required-status contexts")
            for value in values:
                if isinstance(value, Mapping) and isinstance(value.get("context"), str):
                    contexts.add(value["context"])
                else:
                    raise GateError("invalid required-status context")
        return sorted(contexts)

    def merge(self, pr_number: int, expected_head: str, commit_title: str) -> None:
        merge_token = os.environ.get("MERGE_TOKEN")
        if not merge_token:
            raise GateError("MERGE_TOKEN is required for live merge")
        env = dict(self.env)
        env["GH_TOKEN"] = merge_token
        endpoint = "repos/%s/pulls/%s/merge" % (self.config.repository, pr_number)
        # Use the immediate REST merge endpoint rather than `gh pr merge`.
        # The latter may silently enable auto-merge when an approval is missing,
        # which would merge later without repeating the final attestation.
        command = [
            "gh",
            "api",
            endpoint,
            "--method",
            "PUT",
            "--raw-field",
            "merge_method=squash",
            "--raw-field",
            "sha=%s" % expected_head,
            "--raw-field",
            "commit_title=%s" % commit_title,
        ]
        completed = subprocess.run(command, env=env, text=True, capture_output=True)
        if completed.returncode != 0:
            raise GateError(
                "non-admin exact-head merge failed: %s" % completed.stderr.strip()
            )
        try:
            response = json.loads(completed.stdout)
        except json.JSONDecodeError as exc:
            raise GateError("merge endpoint returned invalid JSON") from exc
        if (
            not isinstance(response, Mapping)
            or response.get("merged") is not True
            or not isinstance(response.get("sha"), str)
            or not SHA_RE.fullmatch(response["sha"])
        ):
            raise GateError("merge endpoint did not confirm an immediate merge")

    def read_merge_result(self, pr_number: int) -> Mapping[str, Any]:
        return self._api_json("repos/%s/pulls/%s" % (self.config.repository, pr_number))


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pr-number", type=int, required=True)
    parser.add_argument("--expected-head", default="")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args(argv)
    token = os.environ.get("GH_TOKEN")
    if not token:
        sys.stderr.write("not ready: GH_TOKEN is required\n")
        return 1
    repository = os.environ.get("GITHUB_REPOSITORY", "team-telnyx/telnyx-python")
    try:
        config = GateConfig.for_repository(repository)
        result = ReleasePRAutoMergeGate(config, GitHubClient(config, token)).run(
            args.pr_number, args.expected_head or None, args.dry_run
        )
    except GateError as exc:
        sys.stderr.write("not ready: %s\n" % exc)
        return 1
    sys.stdout.write(json.dumps(result, sort_keys=True) + "\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
