if (!process.env['TELNYX_API_KEY']) {
  console.error('Please set the environmental variable: TELNYX_API_KEY');
  process.exit();
}

if (!process.env['TELNYX_PUBLIC_KEY']) {
  console.error('Please set the environmental variable: TELNYX_PUBLIC_KEY');
  process.exit();
}

module.exports = {
  TELNYX_API_KEY: process.env['TELNYX_API_KEY'],
  TELNYX_PUBLIC_KEY: process.env['TELNYX_PUBLIC_KEY'],
  TELNYX_APP_PORT: process.env['TELNYX_APP_PORT'] || 3000,
};
