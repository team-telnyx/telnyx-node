#!/usr/bin/env python3
"""Static contracts for DOT-2061 Node phase 1."""
import unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
class NodeGateTests(unittest.TestCase):
 def test_release_pr_keeps_full_ci_while_readiness_is_added(self):
  ci=(ROOT/'.github/workflows/ci.yml').read_text()
  self.assertIn('name: lint',ci); self.assertIn('name: build',ci)
  self.assertNotIn('classify-production-ci',ci)
  self.assertIn('test_release_pr_ci_gate.py',ci)
 def test_trusted_readiness_is_dry_run(self):
  w=(ROOT/'.github/workflows/release-pr-readiness.yml').read_text()
  self.assertIn('pull_request_target:',w)
  self.assertIn("default_branch || 'master'",w)
  self.assertIn('--expected-head',w); self.assertIn('--dry-run',w)
  self.assertIn('persist-credentials: false',w)
  self.assertNotIn('--merge',w)
if __name__=='__main__': unittest.main()
