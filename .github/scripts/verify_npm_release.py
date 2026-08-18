#!/usr/bin/env python3
import argparse,json,time,urllib.error,urllib.parse,urllib.request

def validate_npm_payload(payload,package,version):
 if not isinstance(payload,dict): raise RuntimeError("malformed npm payload")
 if payload.get("version") != version: raise RuntimeError("npm version mismatch")
 dist=payload.get("dist")
 if not isinstance(dist,dict) or not isinstance(dist.get("integrity"),str) or not dist["integrity"]: raise RuntimeError("missing npm integrity")
 if not isinstance(dist.get("tarball"),str) or not dist["tarball"].startswith("https://"): raise RuntimeError("missing npm tarball")

def fetch(package,version,timeout=30):
 url="https://registry.npmjs.org/%s/%s"%(urllib.parse.quote(package,safe='@'),urllib.parse.quote(version,safe=''))
 with urllib.request.urlopen(url,timeout=timeout) as r: return json.load(r)

def main():
 p=argparse.ArgumentParser(); p.add_argument('--version',required=True); p.add_argument('--attempts',type=int,default=20); p.add_argument('--delay',type=float,default=15); a=p.parse_args()
 packages=('telnyx','telnyx-mcp'); last=None
 for attempt in range(1,a.attempts+1):
  try:
   for package in packages: validate_npm_payload(fetch(package,a.version),package,a.version)
   print('verified npm packages %s at %s'%(', '.join(packages),a.version)); return 0
  except Exception as e:
   last=e
   if attempt<a.attempts: time.sleep(a.delay)
 raise RuntimeError('npm availability verification exhausted: %s'%type(last).__name__)
if __name__=='__main__': raise SystemExit(main())
