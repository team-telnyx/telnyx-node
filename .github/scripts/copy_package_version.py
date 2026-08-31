#!/usr/bin/env python3
"""Copy only Release Please's package version onto generated package.json."""
from __future__ import annotations

import json
from pathlib import Path
import re
import sys

VERSION_RE = re.compile(r"^[0-9]+\.[0-9]+\.[0-9]+$")
LINE_RE = re.compile(r'(?m)^(?P<prefix>\s*"version"\s*:\s*")[^"]+(?P<suffix>",?\s*)$')


def fail(message: str) -> "None":
    raise SystemExit(message)


def main() -> int:
    if len(sys.argv) != 3:
        fail("usage: copy_package_version.py RELEASE_PACKAGE TARGET_PACKAGE")
    release_path, target_path = map(Path, sys.argv[1:])
    try:
        release_text = release_path.read_text(encoding="utf-8")
        target_text = target_path.read_text(encoding="utf-8")
        release_data = json.loads(release_text)
        json.loads(target_text)
    except (OSError, UnicodeError, json.JSONDecodeError) as exc:
        fail("could not read valid package manifests: %s" % exc)
    version = release_data.get("version") if isinstance(release_data, dict) else None
    if not isinstance(version, str) or not VERSION_RE.fullmatch(version):
        fail("release package must contain one semantic version")
    matches = list(LINE_RE.finditer(target_text))
    if len(matches) != 1:
        fail("target package must contain exactly one root version field")
    match = matches[0]
    updated = target_text[: match.start()] + match.group("prefix") + version + match.group("suffix") + target_text[match.end() :]
    try:
        parsed = json.loads(updated)
    except json.JSONDecodeError as exc:
        fail("updated target package is invalid JSON: %s" % exc)
    if not isinstance(parsed, dict) or parsed.get("version") != version:
        fail("updated target package version did not match")
    target_path.write_text(updated, encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
