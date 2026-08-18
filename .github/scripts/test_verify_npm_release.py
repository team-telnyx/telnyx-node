#!/usr/bin/env python3
import unittest
from verify_npm_release import validate_npm_payload
class NPMTests(unittest.TestCase):
 def test_exact_version_with_integrity(self):
  validate_npm_payload({"version":"7.16.0","dist":{"integrity":"sha512-abc","tarball":"https://registry.npmjs.org/telnyx/-/telnyx-7.16.0.tgz"}},"telnyx","7.16.0")
 def test_wrong_version(self):
  with self.assertRaises(RuntimeError): validate_npm_payload({"version":"7.15.0","dist":{"integrity":"x","tarball":"x"}},"telnyx","7.16.0")
 def test_missing_integrity(self):
  with self.assertRaises(RuntimeError): validate_npm_payload({"version":"7.16.0","dist":{"tarball":"x"}},"telnyx","7.16.0")
 def test_malformed(self):
  with self.assertRaises(RuntimeError): validate_npm_payload([],"telnyx","7.16.0")
if __name__=='__main__': unittest.main()
