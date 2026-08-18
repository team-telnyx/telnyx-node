#!/usr/bin/env python3
import unittest
from release_pr_auto_merge import GateError
from validate_next_provenance import PRODUCTION_POLICY_PATHS,api_tree,changed_paths,require_policy_parity,require_only_allowed_changes
A=("100644","blob","a"*40); B=("100644","blob","b"*40)
class NodeNextTests(unittest.TestCase):
 def test_generated_change_rejected(self):
  with self.assertRaisesRegex(GateError,"src/generated.ts"): require_only_allowed_changes({"src/generated.ts":A},{"src/generated.ts":B},{".github/CODEOWNERS"},"promotion")
 def test_codeowners_transform_allowed(self): require_only_allowed_changes({"src/generated.ts":A,".github/CODEOWNERS":A},{"src/generated.ts":A,".github/CODEOWNERS":B},{".github/CODEOWNERS"},"promotion")
 def test_changes(self): self.assertEqual(changed_paths({"same":A,"deleted":A,"changed":A},{"same":A,"added":B,"changed":B}),{"deleted","added","changed"})
 def test_policy_parity(self):
  with self.assertRaisesRegex(GateError,"ci.yml"): require_policy_parity({".github/workflows/ci.yml":A},{},{".github/workflows/ci.yml"})
  require_policy_parity({p:A for p in PRODUCTION_POLICY_PATHS},{p:A for p in PRODUCTION_POLICY_PATHS},PRODUCTION_POLICY_PATHS)
 def test_api_tree(self): self.assertEqual(api_tree({"truncated":False,"tree":[{"path":"a","type":"blob","sha":"a"*40,"mode":"100644"}]}),{"a":A})
 def test_malformed_fails(self):
  with self.assertRaisesRegex(GateError,"truncated"): api_tree({"truncated":True,"tree":[]})
if __name__=='__main__': unittest.main()
