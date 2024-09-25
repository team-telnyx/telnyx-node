/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  MethodSpec,
  PromiseCache,
  RequestArgs,
  TelnyxResourceObject,
} from './Types';
import makeRequest from './makeRequest';
import * as utils from './utils';

type IterationResult = {
  done: boolean;
  value?: any;
};

type ListResult = {
  data: Array<any>;
  meta: {
    page_number: number;
    page_size: number;
    total_pages: number;
  };
  // eslint-disable-next-line camelcase
  has_more: boolean;
};

type IterationDoneCallback = () => void;
type IterationItemCallback = (
  item: any,
  next: any,
) => void | boolean | Promise<void | boolean>;

type AutoPagingEach = (
  onItem: IterationItemCallback,
  onDone?: IterationDoneCallback,
) => Promise<void>;

type AutoPagingToArrayOptions = {
  limit?: number;
};
type AutoPagingToArray = (
  opts: AutoPagingToArrayOptions,
  onDone: IterationDoneCallback,
) => Promise<Array<any> | void>;

type AutoPaginationMethods = {
  autoPagingEach: AutoPagingEach;
  autoPagingToArray: AutoPagingToArray;
  next: () => Promise<void>;
  return: () => void;
};

export function makeAutoPaginationMethods(
  self: TelnyxResourceObject,
  requestArgs: RequestArgs,
  spec: MethodSpec,
  firstPagePromise: Promise<any>,
) {
  const promiseCache: PromiseCache<IterationResult> = {currentPromise: null};
  let listPromise = firstPagePromise;
  let i = 0;

  function iterate(
    listResult: ListResult,
  ): IterationResult | Promise<IterationResult> {
    if (
      !(
        listResult &&
        listResult.data &&
        typeof listResult.data.length === 'number'
      )
    ) {
      throw Error(
        'Unexpected: Telnyx API response does not have a well-formed `data` array.',
      );
    }

    if (i < listResult.data.length) {
      const value = listResult.data[i];
      i += 1;
      return {value: value, done: false};
    } else if (hasMore(listResult)) {
      // Reset counter, request next page, and recurse.
      i = 0;
      const nextPageNumber = getNextPageNumber(listResult);
      const pageSize = getPageSize(listResult);
      listPromise = makeRequest(self, requestArgs, spec, {
        page: {number: nextPageNumber, size: pageSize},
      });
      return listPromise.then(iterate);
    }
    return {value: undefined, done: true};
  }

  function hasMore(listResult: ListResult) {
    return (
      listResult.data.length &&
      listResult.meta.page_number &&
      listResult.meta.total_pages &&
      listResult.meta.total_pages > listResult.meta.page_number
    );
  }

  function getNextPageNumber(listResult: ListResult) {
    return listResult.meta.page_number + 1;
  }

  function getPageSize(listResult: ListResult) {
    return listResult.meta.page_size;
  }

  function asyncIteratorNext(): Promise<any> {
    return memoizedPromise<IterationResult>(
      promiseCache,
      function (resolve, reject) {
        return listPromise.then(iterate).then(resolve).catch(reject);
      },
    );
  }

  const autoPagingEach = makeAutoPagingEach(asyncIteratorNext);
  const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);

  const autoPaginationMethods: AutoPaginationMethods = {
    autoPagingEach,
    autoPagingToArray,

    // Async iterator functions:
    next: asyncIteratorNext,
    return: function (): any {
      // This is required for `break`.
      return {};
    },
    [getAsyncIteratorSymbol()]: function () {
      return autoPaginationMethods;
    },
  };
  return autoPaginationMethods;
}

/**
 * ----------------
 * Private Helpers:
 * ----------------
 */

function getAsyncIteratorSymbol(): symbol | string {
  if (typeof Symbol !== 'undefined' && Symbol.asyncIterator) {
    return Symbol.asyncIterator;
  }
  // Follow the convention from libraries like iterall: https://github.com/leebyron/iterall#asynciterator-1
  return '@@asyncIterator';
}

function getDoneCallback(args: Array<any>): IterationDoneCallback | null {
  if (args.length < 2) {
    return null;
  }
  const onDone = args[1];
  if (typeof onDone !== 'function') {
    throw Error(
      'The second argument to autoPagingEach, if present, must be a callback function; receieved ' +
        typeof onDone,
    );
  }
  return onDone;
}

/**
 * We allow four forms of the `onItem` callback (the middle two being equivalent),
 *
 *   1. `.autoPagingEach((item) => { doSomething(item); return false; });`
 *   2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
 *   3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
 *   4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
 *
 * In addition to standard validation, this helper
 * coalesces the former forms into the latter form.
 */
function getItemCallback(args: Array<any>): IterationItemCallback | undefined {
  if (args.length === 0) {
    return undefined;
  }
  const onItem = args[0];
  if (typeof onItem !== 'function') {
    throw Error(
      'The first argument to autoPagingEach, if present, must be a callback function; receieved ' +
        typeof onItem,
    );
  }

  // 4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
  if (onItem.length === 2) {
    return onItem;
  }

  if (onItem.length > 2) {
    throw Error(
      'The `onItem` callback function passed to autoPagingEach must accept at most two arguments; got ' +
        onItem,
    );
  }

  // This magically handles all three of these usecases (the latter two being functionally identical):
  // 1. `.autoPagingEach((item) => { doSomething(item); return false; });`
  // 2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
  // 3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
  return function _onItem(item, next) {
    const shouldContinue = onItem(item);
    next(shouldContinue);
  };
}

/**
 * If a user calls `.next()` multiple times in parallel,
 * return the same result until something has resolved
 * to prevent page-turning race conditions.
 */
function memoizedPromise<T>(
  promiseCache: PromiseCache<T>,
  cb: (resolve: (value: T) => void, reject: (reason?: any) => void) => void,
): Promise<T> {
  if (promiseCache.currentPromise) {
    return promiseCache.currentPromise;
  }
  promiseCache.currentPromise = new Promise(cb).then(function (ret) {
    promiseCache.currentPromise = undefined;
    return ret;
  });
  return promiseCache.currentPromise;
}

function makeAutoPagingEach(
  asyncIteratorNext: () => Promise<IterationResult>,
): AutoPagingEach {
  return function autoPagingEach(...args): Promise<void> {
    const onItem = getItemCallback(args);
    const onDone = getDoneCallback(args);
    if (args.length > 2) {
      throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
    }

    const autoPagePromise = wrapAsyncIteratorWithCallback(
      asyncIteratorNext,
      // @ts-expect-error we might need a null check
      onItem,
    );
    return utils.callbackifyPromiseWithTimeout(autoPagePromise, onDone);
  } as AutoPagingEach;
}

function makeAutoPagingToArray(
  autoPagingEach: AutoPagingEach,
): AutoPagingToArray {
  return function autoPagingToArray(
    opts,
    onDone: IterationDoneCallback,
  ): Promise<Array<any> | void> {
    const limit = opts && opts.limit;
    if (!limit) {
      throw Error(
        'You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.',
      );
    }
    if (limit > 10000) {
      throw Error(
        'You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.',
      );
    }
    const promise = new Promise<Array<any>>((resolve, reject) => {
      const items: Array<any> = [];
      autoPagingEach((item) => {
        items.push(item);
        if (items.length >= limit) {
          return false;
        }
      })
        .then(() => {
          resolve(items);
        })
        .catch(reject);
    });
    return utils.callbackifyPromiseWithTimeout(promise, onDone);
  };
}

function wrapAsyncIteratorWithCallback(
  asyncIteratorNext: () => Promise<IterationResult>,
  onItem: IterationItemCallback,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    function handleIteration(iterResult: IterationResult): Promise<any> | void {
      if (iterResult.done) {
        resolve();
        return;
      }

      const item = iterResult.value;
      return new Promise((next) => {
        // Bit confusing, perhaps; we pass a `resolve` fn
        // to the user, so they can decide when and if to continue.
        // They can return false, or a promise which resolves to false, to break.
        onItem(item, next);
      }).then((shouldContinue) => {
        if (shouldContinue === false) {
          return handleIteration({done: true});
        } else {
          return asyncIteratorNext().then(handleIteration);
        }
      });
    }

    asyncIteratorNext().then(handleIteration).catch(reject);
  });
}
