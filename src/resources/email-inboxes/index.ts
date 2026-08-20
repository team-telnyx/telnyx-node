// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export {
  Drafts,
  type EmailAddress,
  type EmailDraft,
  type EmailDraftRequest,
  type EmailDraftResponse,
  type EmailMessage,
  type EmailMessageResponse,
  type DraftListParams,
  type DraftCreateParams,
  type DraftDeleteParams,
  type DraftRetrieveParams,
  type DraftUpdateParams,
  type DraftPatchParams,
  type DraftSendParams,
  type EmailMessagesEmailCursorPagination,
  type EmailDraftsEmailBracketCursorPagination,
} from './drafts';
export {
  EmailInboxes,
  type EmailInbox,
  type EmailInboxResponse,
  type EmailInboxListParams,
  type EmailInboxCreateParams,
  type EmailInboxesEmailCursorPagination,
} from './email-inboxes';
export {
  Filters,
  type InboxFilters,
  type MutateInboxFiltersRequest,
  type FilterListResponse,
  type FilterAddResponse,
  type FilterDeleteAllResponse,
  type FilterReplaceResponse,
  type FilterDeleteAllParams,
  type FilterAddParams,
  type FilterReplaceParams,
} from './filters';
export {
  Messages,
  type MessageUpdateResponse,
  type MessageListParams,
  type MessageUpdateParams,
  type MessageDraftsParams,
} from './messages/index';
export {
  Threads,
  type EmailPaginationMeta,
  type InboundEmailAddress,
  type InboundThread,
  type InboundThreadDetail,
  type InboundThreadListResponse,
  type ThreadMessage,
  type ThreadRetrieveResponse,
  type ThreadListParams,
  type ThreadRetrieveParams,
  type InboundThreadsEmailBracketCursorPagination,
} from './threads/index';
