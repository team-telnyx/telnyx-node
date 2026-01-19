// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { TelnyxError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type Telnyx } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: Telnyx;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: Telnyx, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new TelnyxError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: Telnyx,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface DefaultFlatPaginationResponse<Item> {
  data: Array<Item>;

  meta: DefaultFlatPaginationResponse.Meta;
}

export namespace DefaultFlatPaginationResponse {
  export interface Meta {
    page_number: number;

    total_pages: number;
  }
}

export interface DefaultFlatPaginationParams {
  'page[number]'?: number;

  'page[size]'?: number;
}

export class DefaultFlatPagination<Item>
  extends AbstractPage<Item>
  implements DefaultFlatPaginationResponse<Item>
{
  data: Array<Item>;

  meta: DefaultFlatPaginationResponse.Meta;

  constructor(
    client: Telnyx,
    response: Response,
    body: DefaultFlatPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.meta = body.meta || {};
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = this.meta?.page_number ?? 1;

    if (currentPage >= this.meta?.total_pages) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        'page[number]': currentPage + 1,
      },
    };
  }
}

export type DefaultFlatPaginationTopLevelArrayResponse<Item> = Item[];

export interface DefaultFlatPaginationTopLevelArrayParams {
  'page[number]'?: number;

  'page[size]'?: number;
}

export class DefaultFlatPaginationTopLevelArray<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: Telnyx,
    response: Response,
    body: DefaultFlatPaginationTopLevelArrayResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body || [];
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const query = this.options.query as DefaultFlatPaginationTopLevelArrayParams;
    const currentPage = query?.['page[number]'] ?? 1;

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        'page[number]': currentPage + 1,
      },
    };
  }
}

export interface DefaultPaginationForLogMessagesResponse<Item> {
  log_messages: Array<Item>;

  meta: DefaultPaginationForLogMessagesResponse.Meta;
}

export namespace DefaultPaginationForLogMessagesResponse {
  export interface Meta {
    page_number: number;

    total_pages: number;
  }
}

export interface DefaultPaginationForLogMessagesParams {
  'page[number]'?: number;

  'page[size]'?: number;
}

export class DefaultPaginationForLogMessages<Item>
  extends AbstractPage<Item>
  implements DefaultPaginationForLogMessagesResponse<Item>
{
  log_messages: Array<Item>;

  meta: DefaultPaginationForLogMessagesResponse.Meta;

  constructor(
    client: Telnyx,
    response: Response,
    body: DefaultPaginationForLogMessagesResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.log_messages = body.log_messages || [];
    this.meta = body.meta || {};
  }

  getPaginatedItems(): Item[] {
    return this.log_messages ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = this.meta?.page_number ?? 1;

    if (currentPage >= this.meta?.total_pages) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        'page[number]': currentPage + 1,
      },
    };
  }
}

export interface DefaultPaginationForMessagingTollfreeResponse<Item> {
  records: Array<Item>;

  total_records: number;
}

export interface DefaultPaginationForMessagingTollfreeParams {
  page?: number;

  page_size?: number;
}

export class DefaultPaginationForMessagingTollfree<Item>
  extends AbstractPage<Item>
  implements DefaultPaginationForMessagingTollfreeResponse<Item>
{
  records: Array<Item>;

  total_records: number;

  constructor(
    client: Telnyx,
    response: Response,
    body: DefaultPaginationForMessagingTollfreeResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.records = body.records || [];
    this.total_records = body.total_records || 0;
  }

  getPaginatedItems(): Item[] {
    return this.records ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const query = this.options.query as DefaultPaginationForMessagingTollfreeParams;
    const currentPage = query?.page ?? 1;

    if (currentPage >= this.total_records) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}

export interface DefaultPaginationForQueuesResponse<Item> {
  queues: Array<Item>;
}

export interface DefaultPaginationForQueuesParams {
  Page?: number;

  PageSize?: number;
}

export class DefaultPaginationForQueues<Item>
  extends AbstractPage<Item>
  implements DefaultPaginationForQueuesResponse<Item>
{
  queues: Array<Item>;

  constructor(
    client: Telnyx,
    response: Response,
    body: DefaultPaginationForQueuesResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.queues = body.queues || [];
  }

  getPaginatedItems(): Item[] {
    return this.queues ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const query = this.options.query as DefaultPaginationForQueuesParams;
    const currentPage = query?.Page ?? 1;

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        Page: currentPage + 1,
      },
    };
  }
}

export interface DefaultFlatPaginationForInexplicitNumberOrdersResponse<Item> {
  data: Array<Item>;

  meta: DefaultFlatPaginationForInexplicitNumberOrdersResponse.Meta;
}

export namespace DefaultFlatPaginationForInexplicitNumberOrdersResponse {
  export interface Meta {
    page_number: number;

    total_pages: number;
  }
}

export interface DefaultFlatPaginationForInexplicitNumberOrdersParams {
  page_number?: number;

  page_size?: number;
}

export class DefaultFlatPaginationForInexplicitNumberOrders<Item>
  extends AbstractPage<Item>
  implements DefaultFlatPaginationForInexplicitNumberOrdersResponse<Item>
{
  data: Array<Item>;

  meta: DefaultFlatPaginationForInexplicitNumberOrdersResponse.Meta;

  constructor(
    client: Telnyx,
    response: Response,
    body: DefaultFlatPaginationForInexplicitNumberOrdersResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.meta = body.meta || {};
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = this.meta?.page_number ?? 1;

    if (currentPage >= this.meta?.total_pages) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page_number: currentPage + 1,
      },
    };
  }
}

export interface PerPagePaginationResponse<Item> {
  data: Array<Item>;

  meta: PerPagePaginationResponse.Meta;
}

export namespace PerPagePaginationResponse {
  export interface Meta {
    page_number: number;

    total_pages: number;
  }
}

export interface PerPagePaginationParams {
  page?: number;

  per_page?: number;
}

export class PerPagePagination<Item> extends AbstractPage<Item> implements PerPagePaginationResponse<Item> {
  data: Array<Item>;

  meta: PerPagePaginationResponse.Meta;

  constructor(
    client: Telnyx,
    response: Response,
    body: PerPagePaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.meta = body.meta || {};
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = this.meta?.page_number ?? 1;

    if (currentPage >= this.meta?.total_pages) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}

export interface PerPagePaginationV2Response<Item> {
  records: Array<Item>;

  page: number;

  totalRecords: number;
}

export interface PerPagePaginationV2Params {
  page?: number;

  recordsPerPage?: number;
}

export class PerPagePaginationV2<Item>
  extends AbstractPage<Item>
  implements PerPagePaginationV2Response<Item>
{
  records: Array<Item>;

  page: number;

  totalRecords: number;

  constructor(
    client: Telnyx,
    response: Response,
    body: PerPagePaginationV2Response<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.records = body.records || [];
    this.page = body.page;
    this.totalRecords = body.totalRecords;
  }

  getPaginatedItems(): Item[] {
    return this.records ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = this.page;

    if (currentPage >= this.totalRecords) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}
