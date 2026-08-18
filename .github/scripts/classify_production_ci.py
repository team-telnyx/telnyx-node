#!/usr/bin/env python3
# ruff: noqa: T201
# pyright: basic
"""Classify production SDK CI events without weakening release validation.

Unknown or unverifiable default-branch pushes always run the full suite. The only
optimized default-branch case is an exact Release Please merge whose merged tree
matches the validated PR head and whose expected exact-head checks succeeded.
"""
from __future__ import annotations

import os
import re
import sys
import json
import time
import argparse
import urllib.error
import urllib.request
from typing import Any, Mapping, Sequence, NamedTuple

SHA_RE = re.compile(r"^[0-9a-f]{40}$")
VERSION_RE = re.compile(r"^release: [0-9]+\.[0-9]+\.[0-9]+$")
SUCCESS_CONCLUSIONS = {"success"}


class Decision(NamedTuple):
    run_full: bool
    mode: str
    reason: str


CHECKS: Mapping[str, Mapping[str, str]] = {
    "team-telnyx/telnyx-python": {
        "build": "github-actions", "lint": "github-actions", "test": "github-actions",
        "protected-paths": "github-actions", "release doctor": "github-actions",
        "Analyze (actions)": "github-actions", "Analyze (python)": "github-actions",
        "CodeQL": "github-advanced-security", "release-provenance": "status",
    },
    "team-telnyx/telnyx-java": {
        "build": "github-actions", "lint": "github-actions", "test": "github-actions",
        "protected-paths": "github-actions", "release doctor": "github-actions",
        "Analyze (actions)": "github-actions", "Analyze (java-kotlin)": "github-actions",
        "CodeQL": "github-advanced-security", "release-provenance": "status",
    },
    "team-telnyx/telnyx-ruby": {
        "lint (rubocop)": "github-actions", "lint (sorbet)": "github-actions",
        "lint (steep)": "github-actions", "test": "github-actions",
        "protected-paths": "github-actions", "release doctor": "github-actions",
        "Analyze (actions)": "github-actions", "Analyze (ruby)": "github-actions",
        "CodeQL": "github-advanced-security", "release-provenance": "status",
    },
    "team-telnyx/telnyx-go": {
        "build": "github-actions", "lint": "github-actions", "test": "github-actions",
        "protected-paths": "github-actions", "Analyze (actions)": "github-actions",
        "Analyze (go)": "github-actions",
        "CodeQL": "github-advanced-security", "release-provenance": "status",
    },
    "team-telnyx/telnyx-node": {
        "build": "github-actions", "lint": "github-actions",
        "protected-paths": "github-actions", "release doctor": "github-actions",
        "Analyze (actions)": "github-actions",
        "Analyze (javascript-typescript)": "github-actions",
        "CodeQL": "github-advanced-security", "release-provenance": "status",
    },
    "team-telnyx/telnyx-php": {
        "lint": "github-actions", "test": "github-actions",
        "protected-paths": "github-actions", "release doctor": "github-actions",
        "Analyze (actions)": "github-actions", "CodeQL": "github-advanced-security",
        "release-provenance": "status",
    },
    "team-telnyx/telnyx-cli": {
        "build": "github-actions", "lint": "github-actions", "test": "github-actions",
        "protected-paths": "github-actions", "release doctor": "github-actions",
        "Analyze (actions)": "github-actions", "Analyze (go)": "github-actions",
        "CodeQL": "github-advanced-security", "release-provenance": "status",
    },
}


class StaticAPI:
    """Deterministic API implementation used by regression tests."""

    def __init__(self, payloads: Mapping[str, Any]):
        self.payloads = dict(payloads)

    def get(self, path: str) -> Any:
        if path not in self.payloads:
            raise RuntimeError("unexpected API path: %s" % path)
        return self.payloads[path]


class GitHubAPI:
    def __init__(self, token: str, attempts: int = 3, sleep=time.sleep):
        if not token:
            raise RuntimeError("GitHub token is required")
        self.token = token
        self.attempts = attempts
        self.sleep = sleep

    def get(self, path: str) -> Any:
        url = "https://api.github.com/" + path.lstrip("/")
        for attempt in range(self.attempts):
            request = urllib.request.Request(
                url,
                headers={
                    "Authorization": "Bearer " + self.token,
                    "Accept": "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                    "User-Agent": "telnyx-production-ci-classifier",
                },
            )
            try:
                with urllib.request.urlopen(request, timeout=30) as response:
                    return json.loads(response.read().decode("utf-8"))
            except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
                retryable = not isinstance(exc, urllib.error.HTTPError) or exc.code in {401, 408, 429, 500, 502, 503, 504}
                if not retryable or attempt + 1 >= self.attempts:
                    raise RuntimeError("GitHub API lookup failed") from exc
                self.sleep(2 ** attempt)
        raise RuntimeError("GitHub API lookup failed")


class GitHubReleaseMergeVerifier:
    def __init__(self, api: Any):
        self.api = api

    def is_verified_release_merge(self, repository: str, sha: str, default_branch: str) -> bool:
        if repository not in CHECKS or not SHA_RE.fullmatch(sha):
            return False
        pulls = self.api.get("repos/%s/commits/%s/pulls?per_page=100" % (repository, sha))
        if not isinstance(pulls, list):
            return False
        candidates = [pr for pr in pulls if self._is_release_merge(pr, sha, default_branch)]
        if len(candidates) != 1:
            return False
        pr = candidates[0]
        head = pr.get("head", {}).get("sha")
        if not isinstance(head, str) or not SHA_RE.fullmatch(head):
            return False

        merged_commit = self.api.get("repos/%s/git/commits/%s" % (repository, sha))
        head_commit = self.api.get("repos/%s/git/commits/%s" % (repository, head))
        if self._tree(merged_commit) != self._tree(head_commit):
            return False
        return self._checks_succeeded(repository, head, CHECKS[repository])

    @staticmethod
    def _is_release_merge(pr: Any, sha: str, default_branch: str) -> bool:
        return (
            isinstance(pr, Mapping)
            and pr.get("state") == "closed"
            and bool(pr.get("merged_at"))
            and pr.get("merge_commit_sha") == sha
            and isinstance(pr.get("title"), str)
            and bool(VERSION_RE.fullmatch(pr["title"]))
            and isinstance(pr.get("base"), Mapping)
            and pr["base"].get("ref") == default_branch
            and isinstance(pr.get("head"), Mapping)
            and isinstance(pr["head"].get("ref"), str)
            and pr["head"]["ref"].startswith("release-please--")
        )

    @staticmethod
    def _tree(commit: Any) -> str:
        if not isinstance(commit, Mapping) or not isinstance(commit.get("tree"), Mapping):
            return ""
        tree = commit["tree"].get("sha")
        return tree if isinstance(tree, str) and SHA_RE.fullmatch(tree) else ""

    def _checks_succeeded(self, repository: str, head: str, expected: Mapping[str, str]) -> bool:
        check_payload = self.api.get("repos/%s/commits/%s/check-runs?per_page=100" % (repository, head))
        status_payload = self.api.get("repos/%s/commits/%s/status" % (repository, head))
        if not isinstance(check_payload, Mapping) or not isinstance(check_payload.get("check_runs"), list):
            return False
        if not isinstance(status_payload, Mapping) or not isinstance(status_payload.get("statuses"), list):
            return False

        latest_checks: dict[str, Mapping[str, Any]] = {}
        ordered = sorted(
            (run for run in check_payload["check_runs"] if isinstance(run, Mapping)),
            key=lambda run: str(run.get("completed_at") or run.get("started_at") or ""),
            reverse=True,
        )
        for run in ordered:
            name = run.get("name")
            if isinstance(name, str) and name not in latest_checks:
                latest_checks[name] = run

        latest_statuses: dict[str, Mapping[str, Any]] = {}
        for status in status_payload["statuses"]:
            if isinstance(status, Mapping) and isinstance(status.get("context"), str):
                latest_statuses.setdefault(status["context"], status)

        for name, source in expected.items():
            if source == "status":
                if latest_statuses.get(name, {}).get("state") != "success":
                    return False
                continue
            run = latest_checks.get(name)
            if not run or run.get("status") != "completed" or run.get("conclusion") not in SUCCESS_CONCLUSIONS:
                return False
            app = run.get("app")
            if not isinstance(app, Mapping) or app.get("slug") != source:
                return False
        return True


def classify_event(event: Mapping[str, Any], verifier: Any) -> Decision:
    repository_data = event.get("repository")
    if not isinstance(repository_data, Mapping):
        return Decision(True, "ordinary_push_full", "repository metadata unavailable")
    repository = repository_data.get("full_name")
    default_branch = repository_data.get("default_branch")
    if not isinstance(repository, str) or not isinstance(default_branch, str):
        return Decision(True, "ordinary_push_full", "repository metadata unavailable")

    event_name = event.get("event_name")
    if event_name == "pull_request":
        pull = event.get("pull_request")
        head_ref = pull.get("head", {}).get("ref") if isinstance(pull, Mapping) else ""
        mode = "release_pr_full" if isinstance(head_ref, str) and head_ref.startswith("release-please--") else "ordinary_pr_full"
        return Decision(True, mode, "pull requests are full validation surfaces")
    if event_name != "push":
        return Decision(True, "ordinary_push_full", "unknown event runs full CI")

    ref = event.get("ref")
    branch = ref[len("refs/heads/"):] if isinstance(ref, str) and ref.startswith("refs/heads/") else ""
    if branch == "next":
        return Decision(False, "next_lightweight", "next uses immutable production-lineage validation")
    if branch.startswith("release-please--"):
        return Decision(False, "release_branch_push_lightweight", "release PR event owns the full suite")
    if branch != default_branch:
        return Decision(True, "ordinary_push_full", "ordinary branch push")

    sha = event.get("after")
    try:
        verified = isinstance(sha, str) and verifier.is_verified_release_merge(repository, sha, default_branch)
    except Exception:
        return Decision(True, "ordinary_push_full", "release verification unavailable; running full CI")
    if verified:
        return Decision(False, "verified_release_merge_lightweight", "exact validated release head/tree was merged")
    return Decision(True, "ordinary_push_full", "default push was not a proven release merge")


def main(argv: Sequence[str] | None = None) -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--event-path", required=True)
    args = parser.parse_args(argv)
    try:
        with open(args.event_path, encoding="utf-8") as handle:
            event = json.load(handle)
        event["event_name"] = os.environ.get("GITHUB_EVENT_NAME", event.get("event_name", ""))
        token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
        verifier = GitHubReleaseMergeVerifier(GitHubAPI(token)) if token else StaticAPI({})
        decision = classify_event(event, verifier)
    except Exception as exc:
        decision = Decision(True, "ordinary_push_full", "classifier error; running full CI")
        sys.stderr.write("classifier warning: %s\n" % type(exc).__name__)

    output = os.environ.get("GITHUB_OUTPUT")
    if output:
        with open(output, "a", encoding="utf-8") as handle:
            handle.write("run_full=%s\n" % str(decision.run_full).lower())
            handle.write("mode=%s\n" % decision.mode)
            handle.write("reason=%s\n" % decision.reason.replace("\n", " "))
    print(json.dumps(decision._asdict(), sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
