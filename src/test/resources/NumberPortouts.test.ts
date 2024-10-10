import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('numberPortouts', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      expect(response).toHaveProperty('meta');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .list({
          filter: {
            carrier_name: 'string',
            spid: 'string',
            status: 'string',
          },
          page: {
            number: 1,
            size: 250,
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .list(
          {
            filter: {
              carrier_name: 'string',
              spid: 'string',
              status: 'string',
            },
            page: {
              number: 1,
              size: 250,
            },
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('Document Id', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('Download Document', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      expect(response.data[0]).toHaveProperty('body');
      expect(response.data[0]).toHaveProperty('created_at');
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('user_id');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts.retrieveComments(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .retrieveComments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('create', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      expect(response.data[0]).toHaveProperty('body');
      expect(response.data[0]).toHaveProperty('created_at');
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('user_id');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .create(TEST_UUID, {body: 'string'}) // Ensure TEST_UUID is a string
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .create(TEST_UUID, {body: 'string'}, TEST_AUTH_KEY) // Ensure TEST_UUID is a string
        .then(responseFn);
    });
  });

  describe('listSupportingDocuments', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      expect(response.data[0]).toHaveProperty('created_at');
      expect(response.data[0]).toHaveProperty('document_id');
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('portout_id');
      expect(response.data[0]).toHaveProperty('record_type');
      expect(response.data[0]).toHaveProperty('type');
      expect(response.data[0]).toHaveProperty('updated_at');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .listSupportingDocuments(TEST_UUID)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .listSupportingDocuments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('createListOfSupportingDocuments', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }
    test('Sends the correct request', function () {
      const requestBody = {
        documents: [
          {
            document_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
            type: 'loa',
          },
        ],
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .createListOfSupportingDocuments(TEST_UUID, requestBody)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        documents: [
          {
            document_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
            type: 'loa',
          },
        ],
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .createListOfSupportingDocuments(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('updateStatus', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .updateStatus(TEST_UUID, {
          status: 'status',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberPortouts
        .updateStatus(
          TEST_UUID,
          {
            status: 'status',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
