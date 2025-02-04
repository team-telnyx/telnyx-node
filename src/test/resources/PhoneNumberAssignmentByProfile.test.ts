import {
  type ResponsePayload,
  type ResponsePayloadListRecords,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
describe('Get Assignment Task Status', function () {
  describe('retrieveTaskStatus', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('status');
      expect(response).toHaveProperty('taskId');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumberAssignmentByProfile
        .retrieveTaskStatus({
          taskId: 'string',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumberAssignmentByProfile
        .retrieveTaskStatus(
          {
            taskId: 'string',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
  describe('retrievePhoneNumberStatus', function () {
    function responseFn(response: ResponsePayloadListRecords) {
      expect(response).toHaveProperty('records');
      expect(response.records).toBeInstanceOf(Array);
      expect(response.records[0]).toHaveProperty('phoneNumber');
      expect(response.records[0]).toHaveProperty('status');
      expect(response.records[0]).toHaveProperty('taskId');
    }

    test('should assign phone number by profile', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumberAssignmentByProfile
        .retrievePhoneNumberStatus({taskId: 'taskId'})
        .then(responseFn);
    });

    test('should assign phone number by profile [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumberAssignmentByProfile
        .retrievePhoneNumberStatus({taskId: 'taskId'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('messagingProfileId');
      expect(response).toHaveProperty('taskId');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumberAssignmentByProfile
        .create({
          messagingProfileId: '4001767e-ce0f-4cae-9d5f-0d5e636e7809',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumberAssignmentByProfile
        .create(
          {
            messagingProfileId: '4001767e-ce0f-4cae-9d5f-0d5e636e7809',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
