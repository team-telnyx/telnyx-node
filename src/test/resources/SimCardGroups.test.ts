import {
  type ResponsePayload,
  ResponsePayloadList,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

type ResponsePayloadSimCardGroupsList = ResponsePayloadList & {
  data: {
    consumed_data: unknown;
  }[];
};

type ResponsePayloadSimCardGroups = ResponsePayload & {
  data: {
    consumed_data: unknown;
  };
};

// describe.skip('SimCardGroups Resource', function () {
describe('SimCardGroups Resource', function () {
  describe('retrieve', function () {
    function responseFn(response: ResponsePayloadSimCardGroups) {
      expect(response.data).toMatchObject({
        id: expect.anything(),
        name: expect.anything(),
        data_limit: expect.anything(),
        consumed_data: expect.anything(),
      });
      expect(response.data).toMatchObject({record_type: 'sim_card_group'});
      expect(response.data.consumed_data).toHaveProperty('amount');
      expect(response.data.consumed_data).toHaveProperty('unit');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardGroups.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardGroups
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayloadSimCardGroups) {
      expect(response.data).toMatchObject({
        id: expect.anything(),
        name: expect.anything(),
        data_limit: expect.anything(),
        consumed_data: expect.anything(),
      });
      expect(response.data).toMatchObject({record_type: 'sim_card_group'});
      expect(response.data.consumed_data).toHaveProperty('amount');
      expect(response.data.consumed_data).toHaveProperty('unit');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardGroups
        .create({name: 'My Custom Group'})
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardGroups
        .create({name: 'My Custom Group'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardGroups
        .create({name: 'My Custom Group'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadSimCardGroupsList) {
      expect(response.data[0]).toMatchObject({
        id: expect.anything(),
        name: expect.anything(),
        data_limit: expect.anything(),
        consumed_data: expect.anything(),
      });
      expect(response.data[0]).toMatchObject({record_type: 'sim_card_group'});
      expect(response.data[0]?.consumed_data).toHaveProperty('amount');
      expect(response.data[0]?.consumed_data).toHaveProperty('unit');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardGroups.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.simCardGroups.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response: ResponsePayloadSimCardGroups) {
      if (response.data) {
        expect(response.data).toMatchObject({
          id: expect.anything(),
          name: expect.anything(),
          data_limit: expect.anything(),
          consumed_data: expect.anything(),
        });
        expect(response.data).toMatchObject({record_type: 'sim_card_group'});
        expect(response.data.consumed_data).toHaveProperty('amount');
        expect(response.data.consumed_data).toHaveProperty('unit');
      }
    }

    describe('del', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.simCardGroups
          .create({name: 'My Custom Group'})
          .then(function (response: ResponsePayloadSimCardGroups) {
            const simCardGroup = response.data;
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            return simCardGroup.del().then(responseFn);
          });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.simCardGroups.retrieve(TEST_UUID).then(function (
          response: ResponsePayloadSimCardGroups,
        ) {
          const simCardGroup = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return simCardGroup.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });

    describe('update', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.simCardGroups
          .create({name: 'My Custom Group'})
          .then(function (response: ResponsePayloadSimCardGroups) {
            const simCardGroup = response.data;
            return (
              simCardGroup
                // @ts-expect-error TODO: import .d.ts files under src/test folder
                .update({name: 'My Custom Updated Group'})
                .then(responseFn)
            );
          });
      });
      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.simCardGroups.retrieve(TEST_UUID).then(function (
          response: ResponsePayloadSimCardGroups,
        ) {
          const simCardGroup = response.data;
          return (
            simCardGroup
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              .update({name: 'My Custom Updated Group'}, TEST_AUTH_KEY)
              .then(responseFn)
          );
        });
      });
    });
  });
});
