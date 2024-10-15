import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Access IP Ranges Resource', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        expect(element).toHaveProperty('cidr_block');
        expect(element).toHaveProperty('created_at');
        expect(element).toHaveProperty('description');
        expect(element).toHaveProperty('id');
        expect(element).toHaveProperty('status');
        expect(element).toHaveProperty('updated_at');
        expect(element).toHaveProperty('user_id');
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpRanges
        .list({
          filter: {
            cidr_block: 'string',
            status: 'pending',
            created_at: {
              gt: '2019-08-24T14:15:22Z',
              lt: '2019-08-24T14:15:22Z',
            },
          },
          page: {
            number: '1',
            size: '20',
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpRanges
        .list(
          {
            filter: {
              cidr_block: 'string',
              status: 'pending',
              created_at: {
                gt: '2019-08-24T14:15:22Z',
                lt: '2019-08-24T14:15:22Z',
              },
            },
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

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('cidr_block');
      expect(response).toHaveProperty('created_at');
      expect(response).toHaveProperty('description');
      expect(response).toHaveProperty('id');
      expect(response).toHaveProperty('status');
      expect(response).toHaveProperty('updated_at');
      expect(response).toHaveProperty('user_id');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpRanges
        .create({
          cidr_block: 'string',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpRanges
        .create(
          {
            cidr_block: 'string',
            description: 'string',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('del', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('created_at');
      expect(response).toHaveProperty('cidr_block');
      expect(response).toHaveProperty('description');
      expect(response).toHaveProperty('id');
      expect(response).toHaveProperty('status');
      expect(response).toHaveProperty('updated_at');
      expect(response).toHaveProperty('user_id');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpRanges.del('1').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.accessIpRanges.del('1', TEST_AUTH_KEY).then(responseFn);
    });
  });
});
