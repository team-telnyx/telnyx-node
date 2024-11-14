import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('NumberOrderDocuments Resource', function () {
  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({
        record_type: 'number_order_document',
      });
      expect(response.data).toHaveProperty('file_id');
      expect(response.data).toHaveProperty('requirements_id');
      expect(response.data).toHaveProperty('requirement_type');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberOrderDocuments
        .retrieve('387d1e31-a218-4375-8151-103f2d5e2d2c')
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberOrderDocuments
        .retrieve('387d1e31-a218-4375-8151-103f2d5e2d2c', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('file_id');
      expect(response.data[0]).toHaveProperty('requirements_id');
      expect(response.data[0]).toHaveProperty('requirement_type');
      expect(response.data[0]).toMatchObject({
        record_type: 'number_order_document',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberOrderDocuments.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberOrderDocuments.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('update', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberOrderDocuments
        .update('387d1e31-a218-4375-8151-103f2d5e2d2c', {
          file_id: '1e3c5822-0362-4702-8e46-5a129f0d3976',
        })
        .then(function (response: ResponsePayload) {
          expect(response.data).toMatchObject({
            record_type: 'number_order_document',
          });
          expect(response.data).toHaveProperty('file_id');
          expect(response.data).toHaveProperty('requirements_id');
          expect(response.data).toHaveProperty('requirement_type');
        });
    });
  });

  describe('upload', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({
        record_type: 'number_order_document',
      });
      expect(response.data).toHaveProperty('file_id');
      expect(response.data).toHaveProperty('requirements_id');
      expect(response.data).toHaveProperty('requirement_type');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberOrderDocuments
        .upload({
          requirements_id: '36aaf27d-986b-493c-bd1b-de16af2e4292',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberOrderDocuments
        .upload(
          {
            requirements_id: '36aaf27d-986b-493c-bd1b-de16af2e4292',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
