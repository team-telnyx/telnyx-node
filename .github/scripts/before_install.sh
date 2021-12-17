npm install -g @stoplight/prism-cli

echo "Starting up Prism Mock Server with spec file at ${TELNYX_MOCK_OPEN_API_URI}"
prism mock ${TELNYX_MOCK_OPEN_API_URI} > /dev/null &

git clone https://github.com/team-telnyx/telnyx-prism-mock.git
cd telnyx-prism-mock/proxy
npm install
node index.js > /dev/null &
cd -
