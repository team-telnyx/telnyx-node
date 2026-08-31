#!/usr/bin/env bash
set -euo pipefail

VERSION="17.11.2"
EXPECTED_INTEGRITY="sha512-we0+NgyHjvczxrilD6aujnRNuASd65Jem0dY5evevxSZvz8BnKnB/QRN3UzGA229fcV09lKCYbqeE9HgkXzGmA=="
PACK_JSON=$(npm pack "release-please@${VERSION}" --json --ignore-scripts)
TARBALL=$(node -e 'const p=JSON.parse(process.argv[1]); if(!Array.isArray(p)||p.length!==1||!p[0].filename) process.exit(1); process.stdout.write(p[0].filename)' "$PACK_JSON")
ACTUAL_INTEGRITY=$(node -e 'const p=JSON.parse(process.argv[1]); if(!Array.isArray(p)||p.length!==1||!p[0].integrity) process.exit(1); process.stdout.write(p[0].integrity)' "$PACK_JSON")
if [[ "$ACTUAL_INTEGRITY" != "$EXPECTED_INTEGRITY" ]]; then
  echo "release-please integrity mismatch: expected $EXPECTED_INTEGRITY, got $ACTUAL_INTEGRITY" >&2
  rm -f -- "$TARBALL"
  exit 1
fi
npm install --no-save --ignore-scripts --package-lock=false "./$TARBALL"
rm -f -- "$TARBALL"
./node_modules/.bin/release-please --version
