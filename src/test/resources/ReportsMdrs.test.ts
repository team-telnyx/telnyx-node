import {type ResponsePayloadList, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('reportsMdrs', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.reportsMdrs
        .list({
          start_date: 'string',
          end_date: 'string',
          id: 'e093fbe0-5bde-11eb-ae93-0242ac130002',
          direction: 'INBOUND',
          profile: 'My profile',
          cld: '+15551237654',
          cli: '+15551237654',
          status: 'DELIVERED',
          message_type: 'SMS',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.reportsMdrs
        .list(
          {
            start_date: 'string',
            end_date: 'string',
            id: 'e093fbe0-5bde-11eb-ae93-0242ac130002',
            direction: 'INBOUND',
            profile: 'My profile',
            cld: '+15551237654',
            cli: '+15551237654',
            status: 'DELIVERED',
            message_type: 'SMS',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
