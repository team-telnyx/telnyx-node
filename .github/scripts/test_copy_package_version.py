#!/usr/bin/env python3
from pathlib import Path
import json
import subprocess
import tempfile
import unittest

SCRIPT = Path(__file__).with_name("copy_package_version.py")

class CopyPackageVersionTests(unittest.TestCase):
    def test_only_version_is_copied_from_release_output(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory); release=root/"release.json"; target=root/"target.json"
            release.write_text(json.dumps({"version":"7.20.0","description":"stale","dependencies":{"standardwebhooks":"^1.0.0"}},indent=2)+"\n")
            target.write_text(json.dumps({"version":"7.19.0","description":"generated","dependencies":{}},indent=2)+"\n")
            subprocess.run(["python3",str(SCRIPT),str(release),str(target)],check=True)
            self.assertEqual(json.loads(target.read_text()), {"version":"7.20.0","description":"generated","dependencies":{}})

    def test_missing_or_malformed_versions_fail_closed(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory); release=root/"release.json"; target=root/"target.json"
            target.write_text('{"version":"7.19.0"}\n')
            for payload in ({}, {"version":"v7.20"}, {"version":7}):
                release.write_text(json.dumps(payload)+"\n")
                with self.subTest(payload=payload):
                    self.assertNotEqual(subprocess.run(["python3",str(SCRIPT),str(release),str(target)]).returncode,0)

if __name__ == "__main__": unittest.main()
