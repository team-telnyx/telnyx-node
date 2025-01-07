import {MethodSpec, TelnyxResourceObject} from './Types.js';
import * as utils from './utils.js';
import makeRequest from './makeRequest.js';
import {makeAutoPaginationMethods} from './autoPagination.js';

/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT, PATCH)
 * @param [spec.path=''] Path to be appended to the API BASE_PATH, joined with
 *  the instance's path (e.g. 'messaging_profiles' or 'available_phone_numbers')
 * @param [spec.urlParams=[]] Array of required arguments in the order that they
 *  must be passed by the consumer of the API. Subsequent optional arguments are
 *  optionally passed through a hash (Object) as the penultimate argument
 *  (preceding the also-optional callback argument
 * @param [spec.paramsNames=[]] Array of required arguments in the order that they
 *  are to be used instead of being passed by the consumer of the API. Useful for nested resources
 *  in a manner that consumer doesn't need to provide path arguments
 * @param [spec.paramsValues=[]] Array of substitute require arguments in `paramsNames` values
 * @param [spec.encode] Function for mutating input parameters to a method.
 *  Usefully for applying transforms to data on a per-method basis.
 * @param [spec.host] Hostname for the request.
 * @param [spec.transformResponseData]   mutates response data to decorate with any util functions or info.
 */
function telnyxMethod(
  spec: MethodSpec,
): (...args: unknown[]) => Promise<unknown> {
  return function (
    this: TelnyxResourceObject,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: any[] // needs to be any since callback is extracted from these args and there's no easy way to type all args
  ): Promise<unknown> {
    if (spec.paramsValues) {
      populateUrlParamsWithResource(this, args, spec);
    }

    const callback = typeof args[args.length - 1] == 'function' && args.pop();

    const requestPromise = utils.callbackifyPromiseWithTimeout(
      makeRequest(this, args, spec, {}),
      callback,
    );

    if (spec.methodType === 'list') {
      const autoPaginationMethods = makeAutoPaginationMethods(
        this,
        args,
        spec,
        requestPromise,
      );
      Object.assign(requestPromise, autoPaginationMethods);
    }

    return requestPromise;
  };
}

/**
 * Populate nested method URL params with resource object attributes that match the param name.
 * This allows you to do things like setting the `call_control_id` attribute from an existing call object on a new instance of `telnyx.calls`.
 */
function populateUrlParamsWithResource(
  self: TelnyxResourceObject,
  args: unknown[],
  spec: MethodSpec,
) {
  // if url params is not in resource response data.
  if (spec.paramsValues && !spec.paramsValues[0]) {
    const paramsValues = (spec.paramsNames || []).reduce(function (
      result,
      name,
    ) {
      // @ts-expect-error TODO: cast name to index of self
      if (self[name]) {
        // @ts-expect-error TODO: cast name to index of self
        result.push(self[name]);
      }
      return result;
    }, []);

    args.unshift(paramsValues);
  } else {
    args.unshift(spec.paramsValues);
  }
}

export default telnyxMethod;
