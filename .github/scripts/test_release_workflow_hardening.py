#!/usr/bin/env python3
"""Fleet release-workflow hardening regression tests."""
from __future__ import annotations

import unittest
from pathlib import Path

from release_pr_auto_merge import GateError, GateConfig, require_version_only_change


class ReleaseWorkflowHardeningTests(unittest.TestCase):
    def test_mixed_manifests_allow_only_the_expected_version_field(self):
        cases: list[tuple[str, str, str, str]] = [
            ("toml-version", "version = \"4.179.0\"\ndependencies = [\"safe\"]\n", "version = \"4.178.0\"\ndependencies = [\"safe\"]\n", "4.179.0"),
            ("json-version", '{\n  "version": "7.20.0",\n  "dependencies": {}\n}\n', '{\n  "version": "7.19.0",\n  "dependencies": {}\n}\n', "7.20.0"),
            ("gradle-version", 'version = "6.92.0" // x-release-please-version\ndependencies {}\n', 'version = "6.91.0" // x-release-please-version\ndependencies {}\n', "6.92.0"),
        ]
        for kind, head, next_text, version in cases:
            with self.subTest(kind=kind):
                require_version_only_change(kind, head, next_text, version)
                with self.assertRaisesRegex(GateError, "changed outside its marked version field"):
                    require_version_only_change(kind, self._drift(kind, head), next_text, version)

    @staticmethod
    def _drift(kind: str, text: str) -> str:
        if kind == "toml-version":
            return text.replace("safe", "stale")
        if kind == "json-version":
            return text.replace('"dependencies": {}', '"dependencies": {"standardwebhooks": "^1.0.0"}')
        return text.replace("dependencies {}", 'dependencies { implementation("stale:dependency:1") }')

    def test_fleet_manifest_policy_is_fail_closed(self):
        expected: dict[str, tuple[dict[str, str], set[str]]] = {
            "team-telnyx/telnyx-python": ({"pyproject.toml": "toml-version"}, set()),
            "team-telnyx/telnyx-node": ({"package.json": "json-version"}, {"pnpm-lock.yaml"}),
            "team-telnyx/telnyx-java": ({"build.gradle.kts": "gradle-version"}, set()),
            "team-telnyx/telnyx-ruby": ({}, {"telnyx.gemspec"}),
            "team-telnyx/telnyx-php": ({}, {"composer.json", "composer.lock"}),
            "team-telnyx/telnyx-go": ({}, set()),
            "team-telnyx/telnyx-cli": ({}, set()),
        }
        for repository, (semantic, exact) in expected.items():
            with self.subTest(repository=repository):
                config = GateConfig.for_repository(repository)
                self.assertEqual(dict(config.version_only_files), semantic)
                for path in exact:
                    self.assertNotIn(path, config.release_files)

    def test_release_workflow_uses_verified_exact_tool_and_singleton_pr(self):
        workflow = Path(".github/workflows/release-please.yml").read_text()
        self.assertIn(".github/scripts/install_release_please.sh", workflow)
        self.assertNotIn("release-please@17\n", workflow)
        self.assertIn("expected exactly one open Release Please PR", workflow)
        self.assertIn('[ "$open_prs" -ne 1 ]', workflow)
        self.assertIn("Refusing to synchronize with $release_pr_count open Release Please PRs", workflow)
        self.assertNotIn('[ "$open_prs" -gt 0 ]', workflow)
        installer = Path(".github/scripts/install_release_please.sh").read_text()
        self.assertIn("17.11.2", installer)
        self.assertIn("we0+NgyHjvczxrilD6aujnRNuASd65Jem0dY5evevxSZvz8BnKnB/QRN3UzGA229fcV09lKCYbqeE9HgkXzGmA==", installer)
        self.assertIn("persist-credentials: false", workflow)
        self.assertIn("gh auth setup-git", workflow)
        self.assertIn("--force-with-lease", workflow)
        self.assertNotIn("git push --force origin", workflow)

    def test_auto_merge_workflow_can_only_attest(self):
        workflow = Path(".github/workflows/release-pr-auto-merge.yml").read_text()
        self.assertIn("--dry-run", workflow)
        self.assertNotIn('DRY_RUN="false"', workflow)
        self.assertNotIn("INPUT_DRY_RUN", workflow)
        self.assertNotIn("Attest exact head and merge normally", workflow)


if __name__ == "__main__":
    unittest.main()
