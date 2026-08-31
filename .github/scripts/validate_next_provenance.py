#!/usr/bin/env python3
# ruff: noqa: T201
# pyright: basic
"""Fail-closed lightweight provenance/tree gate for production `next`.

This runs from repository-owned workflow code. It binds the exact hosted `next`
ref to the latest first-parent staging promotion, reuses the release attestor's
immutable staging/config provenance checks, proves generated files equal the
promoted staging tree, and permits only enumerated production-owned transforms.
"""
from __future__ import annotations

import os
import sys
import argparse
import subprocess
from typing import Set, Dict, Tuple, Mapping, Iterable

from release_pr_auto_merge import (
    SHA_RE,
    CONFIG_URL_RE,
    RELEASE_AS_RE,
    GateError,
    GateConfig,
    GitHubClient,
    ReleasePRAutoMergeGate,
)

TreeEntry = Tuple[str, str, str]

PRODUCTION_POLICY_PATHS = frozenset(
    {
        ".github/workflows/ci.yml", ".github/workflows/release-please.yml",
        ".github/workflows/release-pr-auto-merge.yml", ".github/workflows/release-pr-guard.yml",
        ".github/workflows/release-pr-readiness.yml", ".github/workflows/next-readiness.yml",
        ".github/workflows/release-doctor.yml", ".github/workflows/publish-npm.yml",
        ".github/workflows/publish-mcp.yml", ".github/scripts/classify_production_ci.py",
        ".github/scripts/test_classify_production_ci.py", ".github/scripts/validate_next_provenance.py",
        ".github/scripts/test_validate_next_provenance.py", ".github/scripts/verify_npm_release.py",
        ".github/scripts/test_verify_npm_release.py", ".github/scripts/release_pr_auto_merge.py",
        ".github/scripts/test_release_pr_auto_merge.py",
        ".github/scripts/install_release_please.sh",
        ".github/scripts/test_release_workflow_hardening.py",
        ".github/scripts/copy_package_version.py",
        ".github/scripts/test_copy_package_version.py", ".github/scripts/test_release_pr_ci_gate.py",
        "bin/check-release-environment", "bin/publish-npm", "scripts/test-package-imports",
        "release-please-config.json", "pnpm-workspace.yaml",
    }
)
STAGING_ONLY_PATHS = frozenset(
    {".github/workflows/promote-to-prod.yml", ".github/scripts/attest-staging-promotion.py",
     ".github/scripts/test_attest_staging_promotion.py", ".github/scripts/test_promote_to_prod_contract.py"}
)
PROMOTION_TRANSFORM_PATHS = frozenset({".github/CODEOWNERS"})
RELEASE_METADATA_PATHS = frozenset({".release-please-manifest.json", "CHANGELOG.md", "package.json", "src/version.ts", "packages/mcp-server/package.json"})


def _require(condition: bool, message: str) -> None:
    if not condition:
        raise GateError(message)


def changed_paths(left: Mapping[str, TreeEntry], right: Mapping[str, TreeEntry]) -> Set[str]:
    return {path for path in set(left) | set(right) if left.get(path) != right.get(path)}


def require_only_allowed_changes(
    left: Mapping[str, TreeEntry],
    right: Mapping[str, TreeEntry],
    allowed: Iterable[str],
    label: str,
) -> None:
    unexpected = sorted(changed_paths(left, right) - set(allowed))
    if unexpected:
        raise GateError("%s contains unexpected changes: %s" % (label, ", ".join(unexpected)))


def require_policy_parity(
    default_tree: Mapping[str, TreeEntry],
    next_tree: Mapping[str, TreeEntry],
    policy_paths: Iterable[str],
) -> None:
    for path in policy_paths:
        if path not in default_tree or next_tree.get(path) != default_tree[path]:
            raise GateError("production policy mismatch on next: %s" % path)


def api_tree(payload: Mapping[str, object]) -> Dict[str, TreeEntry]:
    _require(payload.get("truncated") is False, "staging tree response was truncated")
    entries = payload.get("tree")
    if not isinstance(entries, list):
        raise GateError("invalid staging tree payload")
    result: Dict[str, TreeEntry] = {}
    for raw in entries:
        _require(isinstance(raw, Mapping), "invalid staging tree entry")
        path, mode, kind, sha = raw.get("path"), raw.get("mode"), raw.get("type"), raw.get("sha")
        _require(all(isinstance(value, str) and value for value in (path, mode, kind, sha)), "invalid staging tree entry")
        if kind == "blob":
            result[str(path)] = (str(mode), str(kind), str(sha))
    return result


def fetch_exact_production_refs(config: GateConfig, default_sha: str, next_sha: str) -> None:
    completed = subprocess.run(
        [
            "git", "fetch", "--force", "--no-tags", "origin",
            "refs/heads/%s:refs/remotes/origin/audited-default" % config.default_branch,
            "refs/heads/next:refs/remotes/origin/audited-next",
        ],
        text=True,
        capture_output=True,
    )
    _require(completed.returncode == 0, "could not fetch production audit refs")
    for ref, expected in {
        "refs/remotes/origin/audited-default": default_sha,
        "refs/remotes/origin/audited-next": next_sha,
    }.items():
        resolved = subprocess.run(["git", "rev-parse", "--verify", ref], text=True, capture_output=True)
        _require(resolved.returncode == 0 and resolved.stdout.strip() == expected, "production audit ref drift: %s" % ref)


def validate(repository: str, expected_next: str, token: str) -> Tuple[str, str]:
    _require(SHA_RE.fullmatch(expected_next) is not None, "invalid expected next SHA")
    config = GateConfig.for_repository(repository)
    client = GitHubClient(config, token)

    default_ref = client._api_json("repos/%s/git/ref/heads/%s" % (repository, config.default_branch))
    next_ref = client._api_json("repos/%s/git/ref/heads/next" % repository)
    default_sha = str(default_ref.get("object", {}).get("sha", ""))
    current_next = str(next_ref.get("object", {}).get("sha", ""))
    _require(SHA_RE.fullmatch(default_sha) is not None, "invalid default ref SHA")
    _require(current_next == expected_next, "hosted next ref differs from event SHA")

    fetch_exact_production_refs(config, default_sha, current_next)
    promotion = client._find_promotion(current_next)
    promotion_sha = str(promotion.get("sha", ""))
    staging_sha = str(promotion.get("staging_sha", ""))
    _require(SHA_RE.fullmatch(promotion_sha) is not None, "invalid promotion SHA")
    _require(SHA_RE.fullmatch(staging_sha) is not None, "invalid staging SHA")

    versions = RELEASE_AS_RE.findall(str(promotion.get("body", "")))
    _require(len(versions) == 1, "promotion must contain exactly one Release-As trailer")
    staging_prs = client._provenance_api_pages(
        "repos/%s/commits/%s/pulls?per_page=100" % (config.staging_repository, staging_sha)
    )
    generated = client._find_generated_staging_pr(staging_sha, staging_prs)
    config_urls = []
    for source_pr in generated:
        config_urls.extend(CONFIG_URL_RE.findall(str(source_pr.get("body") or "")))
    _require(len(config_urls) == 1, "generated staging provenance must bind one config commit")
    config_commit = client._provenance_api_json(
        "repos/team-telnyx/telnyx-sdk-config/commits/%s" % config_urls[0]
    )
    resolved_config_sha = str(config_commit.get("sha", ""))

    ReleasePRAutoMergeGate(config, client)._attest_provenance(
        {
            "promotion": promotion,
            "staging_prs": staging_prs,
            "generated_staging_prs": generated,
            "generated_staging_reachable": True,
            "resolved_config_sha": resolved_config_sha,
        },
        versions[0],
    )

    staging_payload = client._provenance_api_json(
        "repos/%s/git/trees/%s?recursive=1" % (config.staging_repository, staging_sha)
    )
    staging_tree = api_tree(staging_payload)
    promotion_tree = client._ls_tree(promotion_sha)
    default_tree = client._ls_tree(default_sha)
    next_tree = client._ls_tree(current_next)

    promotion_allowed = (
        set(PRODUCTION_POLICY_PATHS)
        | set(STAGING_ONLY_PATHS)
        | set(PROMOTION_TRANSFORM_PATHS)
        | set(config.release_files)
    )
    require_only_allowed_changes(staging_tree, promotion_tree, promotion_allowed, "staging-to-promotion tree")
    require_only_allowed_changes(
        promotion_tree,
        next_tree,
        set(PRODUCTION_POLICY_PATHS) | set(config.release_files),
        "post-promotion next tree",
    )
    require_policy_parity(default_tree, next_tree, PRODUCTION_POLICY_PATHS)
    return staging_sha, resolved_config_sha


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repository", required=True)
    parser.add_argument("--expected-next", required=True)
    args = parser.parse_args()
    token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
    _require(bool(token), "missing GitHub token")
    staging_sha, config_sha = validate(args.repository, args.expected_next, str(token))
    print("verified next provenance: staging=%s config=%s" % (staging_sha, config_sha))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except GateError as exc:
        print("next readiness failed: %s" % exc, file=sys.stderr)
        raise SystemExit(1) from exc
