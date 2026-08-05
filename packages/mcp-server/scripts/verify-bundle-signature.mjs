import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

// @anthropic-ai/mcpb 2.1.2 can append a PKCS#7 signature but its verifier
// delegates to node-forge's unimplemented PKCS#7 verification path. Verify the
// detached signature independently so a false-positive `mcpb sign` cannot pass
// this package's build.
const bundlePath = process.argv[2];
if (!bundlePath) {
  throw new Error('Usage: node scripts/verify-bundle-signature.mjs <bundle.mcpb>');
}

const header = Buffer.from('MCPB_SIG_V1', 'utf8');
const footer = Buffer.from('MCPB_SIG_END', 'utf8');
const bundle = readFileSync(bundlePath);
const footerIndex = bundle.lastIndexOf(footer);
if (footerIndex < 0 || footerIndex + footer.length !== bundle.length) {
  throw new Error('MCPB signature footer is missing or is not at end of file');
}

const headerIndex = bundle.lastIndexOf(header, footerIndex);
if (headerIndex < 0) {
  throw new Error('MCPB signature header is missing');
}
const lengthOffset = headerIndex + header.length;
const signatureLength = bundle.readUInt32LE(lengthOffset);
const signatureOffset = lengthOffset + 4;
if (signatureOffset + signatureLength !== footerIndex) {
  throw new Error('MCPB signature block length is invalid');
}

const originalContent = bundle.subarray(0, headerIndex);
const signature = bundle.subarray(signatureOffset, footerIndex);
const verificationDirectory = mkdtempSync(join(tmpdir(), 'mcpb-signature-'));
try {
  const contentPath = join(verificationDirectory, 'content.mcpb');
  const signaturePath = join(verificationDirectory, 'signature.der');
  writeFileSync(contentPath, originalContent);
  writeFileSync(signaturePath, signature);

  const verification = spawnSync(
    'openssl',
    [
      'cms',
      '-verify',
      '-binary',
      '-inform',
      'DER',
      '-in',
      signaturePath,
      '-content',
      contentPath,
      '-noverify',
      '-out',
      process.platform === 'win32' ? 'NUL' : '/dev/null',
    ],
    { encoding: 'utf8' },
  );
  if (verification.error) {
    throw verification.error;
  }
  if (verification.status !== 0) {
    throw new Error(
      `MCPB cryptographic signature verification failed: ${verification.stderr.trim()}`,
    );
  }
} finally {
  rmSync(verificationDirectory, { recursive: true, force: true });
}

console.log(`Cryptographic MCPB signature verification passed: ${bundlePath}`);
