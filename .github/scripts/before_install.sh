if [ ! -d "telnyx-mock/${TELNYX_MOCK_VERSION}" ]; then
  mkdir -p telnyx-mock/${TELNYX_MOCK_VERSION}
  curl -L "https://github.com/team-telnyx/telnyx-mock/releases/download/v${TELNYX_MOCK_VERSION}/telnyx-mock_${TELNYX_MOCK_VERSION}_linux_amd64.tar.gz" -o "telnyx-mock/${TELNYX_MOCK_VERSION}_linux_amd64.tar.gz"
  tar -zxf "telnyx-mock/${TELNYX_MOCK_VERSION}_linux_amd64.tar.gz" -C "telnyx-mock/${TELNYX_MOCK_VERSION}/"
fi

echo "Downloading ${TELNYX_MOCK_OPEN_API_URI}"
telnyx-mock/${TELNYX_MOCK_VERSION}/telnyx-mock -spec ${TELNYX_MOCK_OPEN_API_URI} > /dev/null &
TELNYX_MOCK_PID=$!
export PATH="${PATH}:${PWD}/telnyx-mock/${TELNYX_MOCK_VERSION}"