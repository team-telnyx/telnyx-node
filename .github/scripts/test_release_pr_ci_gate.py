#!/usr/bin/env python3
import unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
class NodeGateTests(unittest.TestCase):
 def test_classifier_owns_full_jobs(self):
  w=(ROOT/'.github/workflows/ci.yml').read_text(); self.assertIn('classify production CI',w); self.assertNotIn('>> "$GITHUB_OUTPUT"',w)
  self.assertEqual(w.count('needs: classify-production-ci'),2); self.assertEqual(w.count("if: needs.classify-production-ci.outputs.run_full == 'true'"),2)
  for t in ('test_classify_production_ci.py','test_validate_next_provenance.py','test_verify_npm_release.py'): self.assertIn(t,w)
 def test_lightweight_next(self):
  w=(ROOT/'.github/workflows/next-readiness.yml').read_text(); self.assertIn('validate_next_provenance.py',w); self.assertNotIn('./scripts/lint',w); self.assertNotIn('./scripts/build',w)
 def test_npm_availability(self):
  w=(ROOT/'.github/workflows/release-please.yml').read_text(); self.assertIn('Verify NPM release availability',w); self.assertIn('verify_npm_release.py',w); self.assertNotIn('release-pr-auto-merge.yml',w); self.assertNotIn('Dispatch exact-head release PR gate',w)
 def test_release_sync_refreshes_lockfile_after_version_restore(self):
  w=(ROOT/'.github/workflows/release-please.yml').read_text()
  self.assertIn('pnpm/action-setup@b906affcce14559ad1aafd4ab0e942779e9f58b1',w)
  self.assertIn('pnpm install --lockfile-only --ignore-scripts',w)
  self.assertIn('git add pnpm-lock.yaml',w)
 def test_readiness_dry_run(self):
  w=(ROOT/'.github/workflows/release-pr-readiness.yml').read_text(); self.assertIn('--dry-run',w); self.assertNotIn('--merge',w)
if __name__=='__main__': unittest.main()
