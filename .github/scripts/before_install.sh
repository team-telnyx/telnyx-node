npm install -g @stoplight/prism-cli

echo "Starting up Prism Mock Server with spec file at ${TELNYX_MOCK_OPEN_API_URI}"
prism mock ${TELNYX_MOCK_OPEN_API_URI} > /dev/null &

npm i https://github.com/team-telnyx/telnyx-mock-server-proxy --prefix ./the-proxy
node ./the-proxy/node_modules/telnyx-mock-server-proxy/index.js > /dev/null &
