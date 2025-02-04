import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Documents', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      expect(response).toHaveProperty('meta');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents
        .list({
          filter: {
            filename: {
              contains: 'invoice',
            },
            customer_reference: {
              eq: 'MY REF 001',
              in: ['MY REF 001'],
            },
            created_at: {
              gt: '2021-04-09T22:25:27.521Z',
              lt: '2021-04-09T22:25:27.521Z',
            },
          },
          sort: ['filename'],
          page: {
            number: '1',
            size: '20',
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents
        .list(
          {
            filter: {
              filename: {
                contains: 'invoice',
              },
              customer_reference: {
                eq: 'MY REF 001',
                in: ['MY REF 001'],
              },
              created_at: {
                gt: '2021-04-09T22:25:27.521Z',
                lt: '2021-04-09T22:25:27.521Z',
              },
            },
            sort: ['filename'],
            page: {
              number: '1',
              size: '20',
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
      return telnyx.documents.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe.skip('Download Document', function () { // TODO: fix /documents/{id}/download payload response
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents.download(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents
        .download(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      const requestBody = {
        customer_reference: 'your_customer_reference',
        filename: 'your_filename',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents.update(TEST_UUID, requestBody).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        customer_reference: 'your_customer_reference',
        filename: 'your_filename',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents
        .update(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('upload', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents
        .upload({
          url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents
        .upload(
          {
            url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('del', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents.del(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documents.del(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });
});
