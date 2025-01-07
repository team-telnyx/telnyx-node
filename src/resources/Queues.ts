import TelnyxResource from '../TelnyxResource.js';
import {ResponsePayload, TelnyxObject} from '../Types.js';
import * as utils from '../utils.js';
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

  methods.retrieveCall = telnyxMethod({
    method: 'GET',
    path: '/{queue_name}/calls/{call_control_id}',
    urlParams: ['queue_name', 'call_control_id'],
    paramsValues: [response.data.queue_name as string],
    paramsNames: ['queue_name', 'call_control_id'],
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

  listCalls: telnyxMethod({
    method: 'GET',
    path: '/{queue_name}/calls',
    urlParams: ['queue_name'],
  }),

  retrieveCall: telnyxMethod({
    method: 'GET',
    path: '/{queue_name}/calls/{call_control_id}',
    urlParams: ['queue_name', 'call_control_id'],
    paramsNames: ['queue_name', 'call_control_id'],
    methodType: 'retrieve',
  }),
});
