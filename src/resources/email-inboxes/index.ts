// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export {
  Drafts,
  type EmailAddress,
  type EmailDraft,
  type EmailDraftRequest,
  type EmailDraftResponse,
  type EmailMessage,
  type EmailMessageResponse,
  type DraftListResponse,
  type DraftListParams,
  type DraftCreateParams,
  type DraftDeleteParams,
  type DraftRetrieveParams,
  type DraftUpdateParams,
  type DraftPatchParams,
  type DraftSendParams,
} from './drafts';
export {
  EmailInboxes,
  type EmailInbox,
  type EmailInboxResponse,
  type EmailInboxListResponse,
  type EmailInboxListParams,
  type EmailInboxCreateParams,
} from './email-inboxes';
export {
  Filters,
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
  type MessageListResponse,
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
} from './threads/index';
