#!/usr/bin/env python3
import unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
class NodePromotionContractTests(unittest.TestCase):
 def test_phase1_release_gate_is_production_owned(self):
  w=(ROOT/'.github/workflows/promote-to-prod.yml').read_text()
  for p in ('.github/workflows/release-pr-readiness.yml','.github/workflows/next-readiness.yml','.github/scripts/classify_production_ci.py','.github/scripts/test_classify_production_ci.py','.github/scripts/validate_next_provenance.py','.github/scripts/test_validate_next_provenance.py','.github/scripts/verify_npm_release.py','.github/scripts/test_verify_npm_release.py','.github/scripts/test_release_pr_ci_gate.py'):
   self.assertIn(p,w)
  self.assertIn('origin/master:$path',w)
if __name__=='__main__': unittest.main()
