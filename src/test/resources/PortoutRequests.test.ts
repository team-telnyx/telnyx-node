import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('portout', function () {
  describe('updateStatus', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests
        .updateStatus(TEST_UUID, 'string', {body: 'string'})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests
        .updateStatus(TEST_UUID, 'string', {body: 'string'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('listComments', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).toHaveProperty('body');
        expect(element).toHaveProperty('created_at');
        expect(element).toHaveProperty('id');
        expect(element).toHaveProperty('user_id');
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests.listComments(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests
        .listComments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('createComment', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).toHaveProperty('body');
        expect(element).toHaveProperty('created_at');
        expect(element).toHaveProperty('id');
        expect(element).toHaveProperty('user_id');
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests.createComment(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests
        .createComment(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveRequest', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests.retrieveRequest(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests
        .retrieveRequest(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveComment', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).toHaveProperty('body');
        expect(element).toHaveProperty('created_at');
        expect(element).toHaveProperty('id');
        expect(element).toHaveProperty('user_id');
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests.retrieveComment(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests
        .retrieveComment(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('listDocuments', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).toHaveProperty('created_at');
        expect(element).toHaveProperty('document_id');
        expect(element).toHaveProperty('id');
        expect(element).toHaveProperty('portout_id');
        expect(element).toHaveProperty('record_type');
        expect(element).toHaveProperty('type');
        expect(element).toHaveProperty('updated_at');
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests.listDocuments(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests
        .listDocuments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('createDocuments', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).toHaveProperty('created_at');
        expect(element).toHaveProperty('document_id');
        expect(element).toHaveProperty('id');
        expect(element).toHaveProperty('portout_id');
        expect(element).toHaveProperty('record_type');
        expect(element).toHaveProperty('type');
        expect(element).toHaveProperty('updated_at');
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests.createDocuments(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.portoutRequests
        .createDocuments(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
