import TelnyxResource from '../TelnyxResource';
import {ResponsePayload, TelnyxObject} from '../Types';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

const ACTIONS = ['calls'];

function getSpec(queueName?: string) {
  return function (methodName: string) {
    return {
      method: 'GET',
      path: `/{queueName}/${methodName}`,
      urlParams: ['queueName'],
      paramsValues: [queueName as string],
      paramsNames: ['queueName'],
      methodType: 'list',
    };
  };
}

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  const methods = utils.createNestedMethods(
    telnyxMethod,
    ACTIONS,
    getSpec(response.data.name as string),
  );

  methods.retrieve = telnyxMethod({
    method: 'GET',
    path: '/{call_control_id}',
    urlParams: ['call_control_id'],
    paramsValues: [response.data.call_control_id as string],
    paramsNames: ['call_control_id'],
  });

  return utils.addResourceToResponseData(response, telnyx, 'queues', methods);
}

export const Queues = TelnyxResource.extend({
  path: 'queues',

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{queue_name}',
    urlParams: ['queue_name'],

    transformResponseData: transformResponseData,
  }),

  list_calls: telnyxMethod({
    method: 'GET',
    path: '/{queue_name}/calls',
    urlParams: ['queue_name'],

    transformResponseData: transformResponseData,
  }),

  retrieve_call: telnyxMethod({
    method: 'GET',
    path: '/{queue_name}/calls/{call_control_id}',
    urlParams: ['queue_name', 'call_control_id'],

    transformResponseData: transformResponseData,
  }),
});
