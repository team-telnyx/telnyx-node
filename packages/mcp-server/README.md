# Telnyx TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export TELNYX_API_KEY="My API Key"
export TELNYX_PUBLIC_KEY="My Public Key"
npx -y telnyx-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "telnyx_api": {
      "command": "npx",
      "args": ["-y", "telnyx-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "TELNYX_API_KEY": "My API Key",
        "TELNYX_PUBLIC_KEY": "My Public Key"
      }
    }
  }
}
```

### Cursor

      If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
      in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

      [![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=telnyx-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInRlbG55eC1tY3AiXSwiZW52Ijp7IlRFTE5ZWF9BUElfS0VZIjoiU2V0IHlvdXIgVEVMTllYX0FQSV9LRVkgaGVyZS4iLCJURUxOWVhfUFVCTElDX0tFWSI6IlNldCB5b3VyIFRFTE5ZWF9QVUJMSUNfS0VZIGhlcmUuIn19)

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------ | ------------------------ | --------------- |
| `x-telnyx-api-key` | `apiKey` | bearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "telnyx_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "telnyx-mcp/server";

// import a specific tool
import createBatchDetailRecordsReportingLegacyMessaging from "telnyx-mcp/tools/legacy/reporting/batch-detail-records/messaging/create-batch-detail-records-reporting-legacy-messaging";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createBatchDetailRecordsReportingLegacyMessaging, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `legacy.reporting.batch_detail_records.messaging`:

- `create_batch_detail_records_reporting_legacy_messaging` (`write`): Creates a new MDR detailed report request with the specified filters
- `retrieve_batch_detail_records_reporting_legacy_messaging` (`read`): Retrieves a specific MDR detailed report request by ID
- `list_batch_detail_records_reporting_legacy_messaging` (`read`): Retrieves all MDR detailed report requests for the authenticated user
- `delete_batch_detail_records_reporting_legacy_messaging` (`write`): Deletes a specific MDR detailed report request by ID

### Resource `legacy.reporting.batch_detail_records.speech_to_text`:

- `create_batch_detail_records_reporting_legacy_speech_to_text` (`write`): Creates a new Speech to Text batch report request with the specified filters
- `retrieve_batch_detail_records_reporting_legacy_speech_to_text` (`read`): Retrieves a specific Speech to Text batch report request by ID
- `list_batch_detail_records_reporting_legacy_speech_to_text` (`read`): Retrieves all Speech to Text batch report requests for the authenticated user
- `delete_batch_detail_records_reporting_legacy_speech_to_text` (`write`): Deletes a specific Speech to Text batch report request by ID

### Resource `legacy.reporting.batch_detail_records.voice`:

- `create_batch_detail_records_reporting_legacy_voice` (`write`): Creates a new CDR report request with the specified filters
- `retrieve_batch_detail_records_reporting_legacy_voice` (`read`): Retrieves a specific CDR report request by ID
- `list_batch_detail_records_reporting_legacy_voice` (`read`): Retrieves all CDR report requests for the authenticated user
- `delete_batch_detail_records_reporting_legacy_voice` (`write`): Deletes a specific CDR report request by ID
- `retrieve_fields_batch_detail_records_reporting_legacy_voice` (`read`): Retrieves all available fields that can be used in CDR reports

### Resource `legacy.reporting.usage_reports`:

- `retrieve_speech_to_text_reporting_legacy_usage_reports` (`read`): Generate and fetch speech to text usage report synchronously. This endpoint will both generate and fetch the speech to text report over a specified time period.

### Resource `legacy.reporting.usage_reports.messaging`:

- `create_usage_reports_reporting_legacy_messaging` (`write`): Creates a new legacy usage V2 MDR report request with the specified filters
- `retrieve_usage_reports_reporting_legacy_messaging` (`read`): Fetch single MDR usage report by id.
- `list_usage_reports_reporting_legacy_messaging` (`read`): Fetch all previous requests for MDR usage reports.
- `delete_usage_reports_reporting_legacy_messaging` (`write`): Deletes a specific V2 legacy usage MDR report request by ID

### Resource `legacy.reporting.usage_reports.number_lookup`:

- `create_usage_reports_reporting_legacy_number_lookup` (`write`): Submit a new telco data usage report
- `retrieve_usage_reports_reporting_legacy_number_lookup` (`read`): Retrieve a specific telco data usage report by its ID
- `list_usage_reports_reporting_legacy_number_lookup` (`read`): Retrieve a paginated list of telco data usage reports
- `delete_usage_reports_reporting_legacy_number_lookup` (`write`): Delete a specific telco data usage report by its ID

### Resource `legacy.reporting.usage_reports.voice`:

- `create_usage_reports_reporting_legacy_voice` (`write`): Creates a new legacy usage V2 CDR report request with the specified filters
- `retrieve_usage_reports_reporting_legacy_voice` (`read`): Fetch single cdr usage report by id.
- `list_usage_reports_reporting_legacy_voice` (`read`): Fetch all previous requests for cdr usage reports.
- `delete_usage_reports_reporting_legacy_voice` (`write`): Deletes a specific V2 legacy usage CDR report request by ID

### Resource `oauth`:

- `retrieve_oauth` (`read`): Retrieve details about an OAuth consent token
- `grants_oauth` (`write`): Create an OAuth authorization grant
- `introspect_oauth` (`write`): Introspect an OAuth access token to check its validity and metadata
- `register_oauth` (`write`): Register a new OAuth client dynamically (RFC 7591)
- `retrieve_authorize_oauth` (`read`): OAuth 2.0 authorization endpoint for the authorization code flow
- `retrieve_jwks_oauth` (`read`): Retrieve the JSON Web Key Set for token verification
- `token_oauth` (`write`): Exchange authorization code, client credentials, or refresh token for access token

### Resource `oauth_clients`:

- `create_oauth_clients` (`write`): Create a new OAuth client
- `retrieve_oauth_clients` (`read`): Retrieve a single OAuth client by ID
- `update_oauth_clients` (`write`): Update an existing OAuth client
- `list_oauth_clients` (`read`): Retrieve a paginated list of OAuth clients for the authenticated user
- `delete_oauth_clients` (`write`): Delete an OAuth client

### Resource `oauth_grants`:

- `retrieve_oauth_grants` (`read`): Retrieve a single OAuth grant by ID
- `list_oauth_grants` (`read`): Retrieve a paginated list of OAuth grants for the authenticated user
- `delete_oauth_grants` (`write`): Revoke an OAuth grant

### Resource `access_ip_address`:

- `create_access_ip_address` (`write`): Create new Access IP Address
- `retrieve_access_ip_address` (`read`): Retrieve an access IP address
- `list_access_ip_address` (`read`): List all Access IP Addresses
- `delete_access_ip_address` (`write`): Delete access IP address

### Resource `access_ip_ranges`:

- `create_access_ip_ranges` (`write`): Create new Access IP Range
- `list_access_ip_ranges` (`read`): List all Access IP Ranges
- `delete_access_ip_ranges` (`write`): Delete access IP ranges

### Resource `actions.purchase`:

- `create_actions_purchase` (`write`): Purchases and registers the specified amount of eSIMs to the current user's account.<br/><br/>
  If <code>sim_card_group_id</code> is provided, the eSIMs will be associated with that group. Otherwise, the default group for the current user will be used.<br/><br/>

### Resource `actions.register`:

- `create_actions_register` (`write`): Register the SIM cards associated with the provided registration codes to the current user's account.<br/><br/>
  If <code>sim_card_group_id</code> is provided, the SIM cards will be associated with that group. Otherwise, the default group for the current user will be used.<br/><br/>

### Resource `addresses`:

- `create_addresses` (`write`): Creates an address.
- `retrieve_addresses` (`read`): Retrieves the details of an existing address.
- `list_addresses` (`read`): Returns a list of your addresses.
- `delete_addresses` (`write`): Deletes an existing address.

### Resource `addresses.actions`:

- `accept_suggestions_addresses_actions` (`write`): Accepts this address suggestion as a new emergency address for Operator Connect and finishes the uploads of the numbers associated with it to Microsoft.
- `validate_addresses_actions` (`write`): Validates an address for emergency services.

### Resource `advanced_orders`:

- `create_advanced_orders` (`write`): Create Advanced Order
- `retrieve_advanced_orders` (`read`): Get Advanced Order
- `list_advanced_orders` (`read`): List Advanced Orders
- `update_requirement_group_advanced_orders` (`write`): Update Advanced Order

### Resource `ai`:

- `retrieve_models_ai` (`read`): This endpoint returns a list of Open Source and OpenAI models that are available for use. <br /><br /> **Note**: Model `id`'s will be in the form `{source}/{model_name}`. For example `openai/gpt-4` or `mistralai/Mistral-7B-Instruct-v0.1` consistent with HuggingFace naming conventions.
- `summarize_ai` (`write`): Generate a summary of a file's contents.

  Supports the following text formats:

  - PDF, HTML, txt, json, csv

  Supports the following media formats (billed for both the transcription and summary):

  - flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm
  - Up to 100 MB

### Resource `ai.assistants`:

- `create_ai_assistants` (`write`): Create a new AI Assistant.
- `retrieve_ai_assistants` (`read`): Retrieve an AI Assistant configuration by `assistant_id`.
- `update_ai_assistants` (`write`): Update an AI Assistant's attributes.
- `list_ai_assistants` (`read`): Retrieve a list of all AI Assistants configured by the user.
- `delete_ai_assistants` (`write`): Delete an AI Assistant by `assistant_id`.
- `chat_ai_assistants` (`write`): This endpoint allows a client to send a chat message to a specific AI Assistant. The assistant processes the message and returns a relevant reply based on the current conversation context. Refer to the Conversation API to [create a conversation](https://developers.telnyx.com/api/inference/inference-embedding/create-new-conversation-public-conversations-post), [filter existing conversations](https://developers.telnyx.com/api/inference/inference-embedding/get-conversations-public-conversations-get), [fetch messages for a conversation](https://developers.telnyx.com/api/inference/inference-embedding/get-conversations-public-conversation-id-messages-get), and [manually add messages to a conversation](https://developers.telnyx.com/api/inference/inference-embedding/add-new-message).
- `clone_ai_assistants` (`write`): Clone an existing assistant, excluding telephony and messaging settings.
- `get_texml_ai_assistants` (`read`): Get an assistant texml by `assistant_id`.
- `import_ai_assistants` (`write`): Import assistants from external providers. Any assistant that has already been imported will be overwritten with its latest version from the importing provider.

### Resource `ai.assistants.tests`:

- `create_assistants_ai_tests` (`write`): Creates a comprehensive test configuration for evaluating AI assistant performance
- `retrieve_assistants_ai_tests` (`read`): Retrieves detailed information about a specific assistant test
- `update_assistants_ai_tests` (`write`): Updates an existing assistant test configuration with new settings
- `list_assistants_ai_tests` (`read`): Retrieves a paginated list of assistant tests with optional filtering capabilities
- `delete_assistants_ai_tests` (`write`): Permanently removes an assistant test and all associated data

### Resource `ai.assistants.tests.test_suites`:

- `list_tests_assistants_ai_test_suites` (`read`): Retrieves a list of all distinct test suite names available to the current user

### Resource `ai.assistants.tests.test_suites.runs`:

- `list_test_suites_tests_assistants_ai_runs` (`read`): Retrieves paginated history of test runs for a specific test suite with filtering options
- `trigger_test_suites_tests_assistants_ai_runs` (`write`): Executes all tests within a specific test suite as a batch operation

### Resource `ai.assistants.tests.runs`:

- `retrieve_tests_assistants_ai_runs` (`read`): Retrieves detailed information about a specific test run execution
- `list_tests_assistants_ai_runs` (`read`): Retrieves paginated execution history for a specific assistant test with filtering options
- `trigger_tests_assistants_ai_runs` (`write`): Initiates immediate execution of a specific assistant test

### Resource `ai.assistants.canary_deploys`:

- `create_assistants_ai_canary_deploys` (`write`): Endpoint to create a canary deploy configuration for an assistant.

  Creates a new canary deploy configuration with multiple version IDs and their traffic
  percentages for A/B testing or gradual rollouts of assistant versions.

- `retrieve_assistants_ai_canary_deploys` (`read`): Endpoint to get a canary deploy configuration for an assistant.

  Retrieves the current canary deploy configuration with all version IDs and their
  traffic percentages for the specified assistant.

- `update_assistants_ai_canary_deploys` (`write`): Endpoint to update a canary deploy configuration for an assistant.

  Updates the existing canary deploy configuration with new version IDs and percentages.
  All old versions and percentages are replaces by new ones from this request.

- `delete_assistants_ai_canary_deploys` (`write`): Endpoint to delete a canary deploy configuration for an assistant.

  Removes all canary deploy configurations for the specified assistant.

### Resource `ai.assistants.scheduled_events`:

- `create_assistants_ai_scheduled_events` (`write`): Create a scheduled event for an assistant
- `retrieve_assistants_ai_scheduled_events` (`read`): Retrieve a scheduled event by event ID
- `list_assistants_ai_scheduled_events` (`read`): Get scheduled events for an assistant with pagination and filtering
- `delete_assistants_ai_scheduled_events` (`write`): If the event is pending, this will cancel the event. Otherwise, this will simply remove the record of the event.

### Resource `ai.assistants.tools`:

- `test_assistants_ai_tools` (`write`): Test a webhook tool for an assistant

### Resource `ai.assistants.versions`:

- `retrieve_assistants_ai_versions` (`read`): Retrieves a specific version of an assistant by assistant_id and version_id
- `update_assistants_ai_versions` (`write`): Updates the configuration of a specific assistant version. Can not update main version
- `list_assistants_ai_versions` (`read`): Retrieves all versions of a specific assistant with complete configuration and metadata
- `delete_assistants_ai_versions` (`write`): Permanently removes a specific version of an assistant. Can not delete main version
- `promote_assistants_ai_versions` (`write`): Promotes a specific version to be the main/current version of the assistant. This will delete any existing canary deploy configuration and send all live production traffic to this version.

### Resource `ai.audio`:

- `transcribe_ai_audio` (`write`): Transcribe speech to text. This endpoint is consistent with the [OpenAI Transcription API](https://platform.openai.com/docs/api-reference/audio/createTranscription) and may be used with the OpenAI JS or Python SDK.

### Resource `ai.chat`:

- `create_completion_ai_chat` (`write`): Chat with a language model. This endpoint is consistent with the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat) and may be used with the OpenAI JS or Python SDK.

### Resource `ai.clusters`:

- `retrieve_ai_clusters` (`read`): Fetch a cluster
- `list_ai_clusters` (`read`): List all clusters
- `delete_ai_clusters` (`write`): Delete a cluster
- `compute_ai_clusters` (`write`): Starts a background task to compute how the data in an [embedded storage bucket](https://developers.telnyx.com/api/inference/inference-embedding/post-embedding) is clustered. This helps identify common themes and patterns in the data.
- `fetch_graph_ai_clusters` (`read`): Fetch a cluster visualization

### Resource `ai.conversations`:

- `create_ai_conversations` (`write`): Create a new AI Conversation.
- `retrieve_ai_conversations` (`read`): Retrieve a specific AI conversation by its ID.
- `update_ai_conversations` (`write`): Update metadata for a specific conversation.
- `list_ai_conversations` (`read`): Retrieve a list of all AI conversations configured by the user. Supports [PostgREST-style query parameters](https://postgrest.org/en/stable/api.html#horizontal-filtering-rows) for filtering. Examples are included for the standard metadata fields, but you can filter on any field in the metadata JSON object. For example, to filter by a custom field `metadata->custom_field`, use `metadata->custom_field=eq.value`.
- `delete_ai_conversations` (`write`): Delete a specific conversation by its ID.
- `add_message_ai_conversations` (`write`): Add a new message to the conversation. Used to insert a new messages to a conversation manually ( without using chat endpoint )
- `retrieve_conversations_insights_ai_conversations` (`read`): Retrieve insights for a specific conversation

### Resource `ai.conversations.insight_groups`:

- `retrieve_conversations_ai_insight_groups` (`read`): Get insight group by ID
- `update_conversations_ai_insight_groups` (`write`): Update an insight template group
- `delete_conversations_ai_insight_groups` (`write`): Delete insight group by ID
- `insight_groups_conversations_ai_insight_groups` (`write`): Create a new insight group
- `retrieve_insight_groups_conversations_ai_insight_groups` (`read`): Get all insight groups

### Resource `ai.conversations.insight_groups.insights`:

- `assign_insight_groups_conversations_ai_insights` (`write`): Assign an insight to a group
- `delete_unassign_insight_groups_conversations_ai_insights` (`write`): Remove an insight from a group

### Resource `ai.conversations.insights`:

- `create_conversations_ai_insights` (`write`): Create a new insight
- `retrieve_conversations_ai_insights` (`read`): Get insight by ID
- `update_conversations_ai_insights` (`write`): Update an insight template
- `list_conversations_ai_insights` (`read`): Get all insights
- `delete_conversations_ai_insights` (`write`): Delete insight by ID

### Resource `ai.conversations.messages`:

- `list_conversations_ai_messages` (`read`): Retrieve messages for a specific conversation, including tool calls made by the assistant.

### Resource `ai.embeddings`:

- `create_ai_embeddings` (`write`): Perform embedding on a Telnyx Storage Bucket using the a embedding model.
  The current supported file types are:

  - PDF
  - HTML
  - txt/unstructured text files
  - json
  - csv
  - audio / video (mp3, mp4, mpeg, mpga, m4a, wav, or webm ) - Max of 100mb file size.

  Any files not matching the above types will be attempted to be embedded as unstructured text.

  This process can be slow, so it runs in the background and the user can check
  the status of the task using the endpoint `/ai/embeddings/{task_id}`.

  **Important Note**: When you update documents in a Telnyx Storage bucket, their associated embeddings are automatically kept up to date. If you add or update a file, it is automatically embedded. If you delete a file, the embeddings are deleted for that particular file.

  You can also specify a custom `loader` param. Currently the only supported loader value is
  `intercom` which loads Intercom article jsons as specified by [the Intercom article API](https://developers.intercom.com/docs/references/rest-api/api.intercom.io/Articles/article/)
  This loader will split each article into paragraphs and save additional parameters relevant to Intercom docs, such as
  `article_url` and `heading`. These values will be returned by the `/v2/ai/embeddings/similarity-search` endpoint in the `loader_metadata` field.

- `retrieve_ai_embeddings` (`read`): Check the status of a current embedding task. Will be one of the following:
  - `queued` - Task is waiting to be picked up by a worker
  - `processing` - The embedding task is running
  - `success` - Task completed successfully and the bucket is embedded
  - `failure` - Task failed and no files were embedded successfully
  - `partial_success` - Some files were embedded successfully, but at least one failed
- `list_ai_embeddings` (`read`): Retrieve tasks for the user that are either `queued`, `processing`, `failed`, `success` or `partial_success` based on the query string. Defaults to `queued` and `processing`.
- `similarity_search_ai_embeddings` (`write`): Perform a similarity search on a Telnyx Storage Bucket, returning the most similar `num_docs` document chunks to the query.

  Currently the only available distance metric is cosine similarity which will return a `distance` between 0 and 1.
  The lower the distance, the more similar the returned document chunks are to the query.
  A `certainty` will also be returned, which is a value between 0 and 1 where the higher the certainty, the more similar the document.
  You can read more about Weaviate distance metrics here: [Weaviate Docs](https://weaviate.io/developers/weaviate/config-refs/distances)

  If a bucket was embedded using a custom loader, such as `intercom`, the additional metadata will be returned in the
  `loader_metadata` field.

- `url_ai_embeddings` (`write`): Embed website content from a specified URL, including child pages up to 5 levels deep within the same domain. The process crawls and loads content from the main URL and its linked pages into a Telnyx Cloud Storage bucket. As soon as each webpage is added to the bucket, its content is immediately processed for embeddings, that can be used for [similarity search](https://developers.telnyx.com/api/inference/inference-embedding/post-embedding-similarity-search) and [clustering](https://developers.telnyx.com/docs/inference/clusters).

### Resource `ai.embeddings.buckets`:

- `retrieve_embeddings_ai_buckets` (`read`): Get all embedded files for a given user bucket, including their processing status.
- `list_embeddings_ai_buckets` (`read`): Get all embedding buckets for a user.
- `delete_embeddings_ai_buckets` (`write`): Deletes an entire bucket's embeddings and disables the bucket for AI-use, returning it to normal storage pricing.

### Resource `ai.fine_tuning.jobs`:

- `create_fine_tuning_ai_jobs` (`write`): Create a new fine tuning job.
- `retrieve_fine_tuning_ai_jobs` (`read`): Retrieve a fine tuning job by `job_id`.
- `list_fine_tuning_ai_jobs` (`read`): Retrieve a list of all fine tuning jobs created by the user.
- `cancel_fine_tuning_ai_jobs` (`write`): Cancel a fine tuning job.

### Resource `ai.integrations`:

- `retrieve_ai_integrations` (`read`): Retrieve integration details
- `list_ai_integrations` (`read`): List all available integrations.

### Resource `ai.integrations.connections`:

- `retrieve_integrations_ai_connections` (`read`): Get user setup integrations
- `list_integrations_ai_connections` (`read`): List user setup integrations
- `delete_integrations_ai_connections` (`write`): Delete a specific integration connection.

### Resource `ai.mcp_servers`:

- `create_ai_mcp_servers` (`write`): Create a new MCP server.
- `retrieve_ai_mcp_servers` (`read`): Retrieve details for a specific MCP server.
- `update_ai_mcp_servers` (`write`): Update an existing MCP server.
- `list_ai_mcp_servers` (`read`): Retrieve a list of MCP servers.
- `delete_ai_mcp_servers` (`write`): Delete a specific MCP server.

### Resource `audit_events`:

- `list_audit_events` (`read`): Retrieve a list of audit log entries. Audit logs are a best-effort, eventually consistent record of significant account-related changes.

### Resource `authentication_providers`:

- `create_authentication_providers` (`write`): Creates an authentication provider.
- `retrieve_authentication_providers` (`read`): Retrieves the details of an existing authentication provider.
- `update_authentication_providers` (`write`): Updates settings of an existing authentication provider.
- `list_authentication_providers` (`read`): Returns a list of your SSO authentication providers.
- `delete_authentication_providers` (`write`): Deletes an existing authentication provider.

### Resource `available_phone_number_blocks`:

- `list_available_phone_number_blocks` (`read`): List available phone number blocks

### Resource `available_phone_numbers`:

- `list_available_phone_numbers` (`read`): List available phone numbers

### Resource `balance`:

- `retrieve_balance` (`read`): Get user balance details

### Resource `billing_groups`:

- `create_billing_groups` (`write`): Create a billing group
- `retrieve_billing_groups` (`read`): Get a billing group
- `update_billing_groups` (`write`): Update a billing group
- `list_billing_groups` (`read`): List all billing groups
- `delete_billing_groups` (`write`): Delete a billing group

### Resource `brand`:

- `create_brand` (`write`): This endpoint is used to create a new brand. A brand is an entity created by The Campaign Registry (TCR) that represents an organization or a company. It is this entity that TCR created campaigns will be associated with. Each brand creation will entail an upfront, non-refundable $4 expense.
- `retrieve_brand` (`read`): Retrieve a brand by `brandId`.
- `update_brand` (`write`): Update a brand's attributes by `brandId`.
- `list_brand` (`read`): This endpoint is used to list all brands associated with your organization.
- `delete_brand` (`write`): Delete Brand. This endpoint is used to delete a brand. Note the brand cannot be deleted if it contains one or more active campaigns, the campaigns need to be inactive and at least 3 months old due to billing purposes.
- `get_feedback_brand` (`read`): Get feedback about a brand by ID. This endpoint can be used after creating or revetting
  a brand.

  Possible values for `.category[].id`:

  - `TAX_ID` - Data mismatch related to tax id and its associated properties.
  - `STOCK_SYMBOL` - Non public entity registered as a public for profit entity or
    the stock information mismatch.
  - `GOVERNMENT_ENTITY` - Non government entity registered as a government entity.
    Must be a U.S. government entity.
  - `NONPROFIT` - Not a recognized non-profit entity. No IRS tax-exempt status
    found.
  - `OTHERS` - Details of the data misrepresentation if any.

- `resend_2fa_email_brand` (`write`): Resend brand 2FA email
- `revet_brand` (`write`): This operation allows you to revet the brand. However, revetting is allowed once after the successful brand registration and thereafter limited to once every 3 months.

### Resource `brand.external_vetting`:

- `list_brand_external_vetting` (`read`): Get list of valid external vetting record for a given brand
- `import_brand_external_vetting` (`write`): This operation can be used to import an external vetting record from a TCR-approved
  vetting provider. If the vetting provider confirms validity of the record, it will be
  saved with the brand and will be considered for future campaign qualification.
- `order_brand_external_vetting` (`write`): Order new external vetting for a brand

### Resource `bulk_sim_card_actions`:

- `retrieve_bulk_sim_card_actions` (`read`): This API fetches information about a bulk SIM card action. A bulk SIM card action contains details about a collection of individual SIM card actions.
- `list_bulk_sim_card_actions` (`read`): This API lists a paginated collection of bulk SIM card actions. A bulk SIM card action contains details about a collection of individual SIM card actions.

### Resource `bundle_pricing.billing_bundles`:

- `retrieve_bundle_pricing_billing_bundles` (`read`): Get a single bundle by ID.
- `list_bundle_pricing_billing_bundles` (`read`): Get all allowed bundles.

### Resource `bundle_pricing.user_bundles`:

- `create_bundle_pricing_user_bundles` (`write`): Creates multiple user bundles for the user.
- `retrieve_bundle_pricing_user_bundles` (`read`): Retrieves a user bundle by its ID.
- `list_bundle_pricing_user_bundles` (`read`): Get a paginated list of user bundles.
- `deactivate_bundle_pricing_user_bundles` (`write`): Deactivates a user bundle by its ID.
- `list_resources_bundle_pricing_user_bundles` (`read`): Retrieves the resources of a user bundle by its ID.
- `list_unused_bundle_pricing_user_bundles` (`read`): Returns all user bundles that aren't in use.

### Resource `call_control_applications`:

- `create_call_control_applications` (`write`): Create a call control application.
- `retrieve_call_control_applications` (`read`): Retrieves the details of an existing call control application.
- `update_call_control_applications` (`write`): Updates settings of an existing call control application.
- `list_call_control_applications` (`read`): Return a list of call control applications.
- `delete_call_control_applications` (`write`): Deletes a call control application.

### Resource `call_events`:

- `list_call_events` (`read`): Filters call events by given filter parameters. Events are ordered by `occurred_at`. If filter for `leg_id` or `application_session_id` is not present, it only filters events from the last 24 hours.

  **Note**: Only one `filter[occurred_at]` can be passed.

### Resource `calls`:

- `dial_calls` (`write`): Dial a number or SIP URI from a given connection. A successful response will include a `call_leg_id` which can be used to correlate the command with subsequent webhooks.

  **Expected Webhooks:**

  - `call.initiated`
  - `call.answered` or `call.hangup`
  - `call.machine.detection.ended` if `answering_machine_detection` was requested
  - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting
  - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested
  - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected
  - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set

  When the `record` parameter is set to `record-from-answer`, the response will include a `recording_id` field.

- `retrieve_status_calls` (`read`): Returns the status of a call (data is available 10 minutes after call ended).

### Resource `calls.actions`:

- `answer_calls_actions` (`write`): Answer an incoming call. You must issue this command before executing subsequent commands on an incoming call.

  **Expected Webhooks:**

  - `call.answered`
  - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set

  When the `record` parameter is set to `record-from-answer`, the response will include a `recording_id` field.

- `bridge_calls_actions` (`write`): Bridge two call control calls.

  **Expected Webhooks:**

  - `call.bridged` for Leg A
  - `call.bridged` for Leg B

- `enqueue_calls_actions` (`write`): Put the call in a queue.
- `gather_calls_actions` (`write`): Gather DTMF signals to build interactive menus.

  You can pass a list of valid digits. The `Answer` command must be issued before the `gather` command.

  **Expected Webhooks:**

  - `call.dtmf.received` (you may receive many of these webhooks)
  - `call.gather.ended`

- `gather_using_ai_calls_actions` (`write`): Gather parameters defined in the request payload using a voice assistant.

  You can pass parameters described as a JSON Schema object and the voice assistant will attempt to gather these informations.

  **Expected Webhooks:**

  - `call.ai_gather.ended`
  - `call.conversation.ended`
  - `call.ai_gather.partial_results` (if `send_partial_results` is set to `true`)
  - `call.ai_gather.message_history_updated` (if `send_message_history_updates` is set to `true`)

- `gather_using_audio_calls_actions` (`write`): Play an audio file on the call until the required DTMF signals are gathered to build interactive menus.

  You can pass a list of valid digits along with an 'invalid_audio_url', which will be played back at the beginning of each prompt. Playback will be interrupted when a DTMF signal is received. The `Answer command must be issued before the `gather_using_audio` command.

  **Expected Webhooks:**

  - `call.playback.started`
  - `call.playback.ended`
  - `call.dtmf.received` (you may receive many of these webhooks)
  - `call.gather.ended`

- `gather_using_speak_calls_actions` (`write`): Convert text to speech and play it on the call until the required DTMF signals are gathered to build interactive menus.

  You can pass a list of valid digits along with an 'invalid_payload', which will be played back at the beginning of each prompt. Speech will be interrupted when a DTMF signal is received. The `Answer` command must be issued before the `gather_using_speak` command.

  **Expected Webhooks:**

  - `call.dtmf.received` (you may receive many of these webhooks)
  - `call.gather.ended`

- `hangup_calls_actions` (`write`): Hang up the call.

  **Expected Webhooks:**

  - `call.hangup`
  - `call.recording.saved`

- `leave_queue_calls_actions` (`write`): Removes the call from a queue.
- `pause_recording_calls_actions` (`write`): Pause recording the call. Recording can be resumed via Resume recording command.

  **Expected Webhooks:**

  There are no webhooks associated with this command.

- `refer_calls_actions` (`write`): Initiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any point in the duration of a call.

  **Expected Webhooks:**

  - `call.refer.started`
  - `call.refer.completed`
  - `call.refer.failed`

- `reject_calls_actions` (`write`): Reject an incoming call.

  **Expected Webhooks:**

  - `call.hangup`

- `resume_recording_calls_actions` (`write`): Resume recording the call.

  **Expected Webhooks:**

  There are no webhooks associated with this command.

- `send_dtmf_calls_actions` (`write`): Sends DTMF tones from this leg. DTMF tones will be heard by the other end of the call.

  **Expected Webhooks:**

  There are no webhooks associated with this command.

- `send_sip_info_calls_actions` (`write`): Sends SIP info from this leg.

  **Expected Webhooks:**

  - `call.sip_info.received` (to be received on the target call leg)

- `speak_calls_actions` (`write`): Convert text to speech and play it back on the call. If multiple speak text commands are issued consecutively, the audio files will be placed in a queue awaiting playback.

  **Expected Webhooks:**

  - `call.speak.started`
  - `call.speak.ended`

- `start_ai_assistant_calls_actions` (`write`): Start an AI assistant on the call.

  **Expected Webhooks:**

  - `call.conversation.ended`
  - `call.conversation_insights.generated`

- `start_forking_calls_actions` (`write`): Call forking allows you to stream the media from a call to a specific target in realtime.
  This stream can be used to enable realtime audio analysis to support a
  variety of use cases, including fraud detection, or the creation of AI-generated audio responses.
  Requests must specify either the `target` attribute or the `rx` and `tx` attributes.

  **Expected Webhooks:**

  - `call.fork.started`
  - `call.fork.stopped`

- `start_noise_suppression_calls_actions` (`write`): Noise Suppression Start (BETA)
- `start_playback_calls_actions` (`write`): Play an audio file on the call. If multiple play audio commands are issued consecutively,
  the audio files will be placed in a queue awaiting playback.

  _Notes:_

  - When `overlay` is enabled, `target_legs` is limited to `self`.
  - A customer cannot Play Audio with `overlay=true` unless there is a Play Audio with `overlay=false` actively playing.

  **Expected Webhooks:**

  - `call.playback.started`
  - `call.playback.ended`

- `start_recording_calls_actions` (`write`): Start recording the call. Recording will stop on call hang-up, or can be initiated via the Stop Recording command.

  **Expected Webhooks:**

  - `call.recording.saved`
  - `call.recording.transcription.saved`
  - `call.recording.error`

- `start_siprec_calls_actions` (`write`): Start siprec session to configured in SIPREC connector SRS.

  **Expected Webhooks:**

  - `siprec.started`
  - `siprec.stopped`
  - `siprec.failed`

- `start_streaming_calls_actions` (`write`): Start streaming the media from a call to a specific WebSocket address or Dialogflow connection in near-realtime. Audio will be delivered as base64-encoded RTP payload (raw audio), wrapped in JSON payloads.

  Please find more details about media streaming messages specification under the [link](https://developers.telnyx.com/docs/voice/programmable-voice/media-streaming).

- `start_transcription_calls_actions` (`write`): Start real-time transcription. Transcription will stop on call hang-up, or can be initiated via the Transcription stop command.

  **Expected Webhooks:**

  - `call.transcription`

- `stop_ai_assistant_calls_actions` (`write`): Stop an AI assistant on the call.
- `stop_forking_calls_actions` (`write`): Stop forking a call.

  **Expected Webhooks:**

  - `call.fork.stopped`

- `stop_gather_calls_actions` (`write`): Stop current gather.

  **Expected Webhooks:**

  - `call.gather.ended`

- `stop_noise_suppression_calls_actions` (`write`): Noise Suppression Stop (BETA)
- `stop_playback_calls_actions` (`write`): Stop audio being played on the call.

  **Expected Webhooks:**

  - `call.playback.ended` or `call.speak.ended`

- `stop_recording_calls_actions` (`write`): Stop recording the call.

  **Expected Webhooks:**

  - `call.recording.saved`

- `stop_siprec_calls_actions` (`write`): Stop SIPREC session.

  **Expected Webhooks:**

  - `siprec.stopped`

- `stop_streaming_calls_actions` (`write`): Stop streaming a call to a WebSocket.

  **Expected Webhooks:**

  - `streaming.stopped`

- `stop_transcription_calls_actions` (`write`): Stop real-time transcription.
- `switch_supervisor_role_calls_actions` (`write`): Switch the supervisor role for a bridged call. This allows switching between different supervisor modes during an active call
- `transfer_calls_actions` (`write`): Transfer a call to a new destination. If the transfer is unsuccessful, a `call.hangup` webhook for the other call (Leg B) will be sent indicating that the transfer could not be completed. The original call will remain active and may be issued additional commands, potentially transfering the call to an alternate destination.

  **Expected Webhooks:**

  - `call.initiated`
  - `call.bridged` to Leg B
  - `call.answered` or `call.hangup`
  - `call.machine.detection.ended` if `answering_machine_detection` was requested
  - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting
  - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested
  - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected

- `update_client_state_calls_actions` (`write`): Updates client state

### Resource `campaign`:

- `retrieve_campaign` (`read`): Retrieve campaign details by `campaignId`.
- `update_campaign` (`write`): Update a campaign's properties by `campaignId`. **Please note:** only sample messages are editable.
- `list_campaign` (`read`): Retrieve a list of campaigns associated with a supplied `brandId`.
- `accept_sharing_campaign` (`write`): Manually accept a campaign shared with Telnyx
- `deactivate_campaign` (`write`): Terminate a campaign. Note that once deactivated, a campaign cannot be restored.
- `get_mno_metadata_campaign` (`read`): Get the campaign metadata for each MNO it was submitted to.
- `get_operation_status_campaign` (`read`): Retrieve campaign's operation status at MNO level.
- `get_sharing_status_campaign` (`read`): Get Sharing Status
- `submit_appeal_campaign` (`write`): Submits an appeal for rejected native campaigns in TELNYX_FAILED or MNO_REJECTED status. The appeal is recorded for manual compliance team review and the campaign status is reset to TCR_ACCEPTED. Note: Appeal forwarding is handled manually to allow proper review before incurring upstream charges.

### Resource `campaign.usecase`:

- `get_cost_campaign_usecase` (`read`): Get Campaign Cost

### Resource `campaign.osr`:

- `get_attributes_campaign_osr` (`read`): Get My Osr Campaign Attributes

### Resource `campaign_builder`:

- `create_campaign_builder` (`write`): Before creating a campaign, use the [Qualify By Usecase endpoint](https://developers.telnyx.com/api/messaging/10dlc/get-usecase-qualification) to ensure that the brand you want to assign a new campaign to is qualified for the desired use case of that campaign. **Please note:** After campaign creation, you'll only be able to edit the campaign's sample messages. Creating a campaign will entail an upfront, non-refundable three month's cost that will depend on the campaign's use case ([see 10DLC Costs section for details](https://developers.telnyx.com/docs/messaging/10dlc/concepts#10dlc-costs)).

### Resource `campaign_builder.brand`:

- `qualify_by_usecase_campaign_builder_brand` (`read`): This endpoint allows you to see whether or not the supplied brand is suitable for your desired campaign use case.

### Resource `channel_zones`:

- `update_channel_zones` (`write`): Update the number of Voice Channels for the Non-US Zones. This allows your account to handle multiple simultaneous inbound calls to Non-US numbers. Use this endpoint to increase or decrease your capacity based on expected call volume.
- `list_channel_zones` (`read`): Returns the non-US voice channels for your account. voice channels allow you to use Channel Billing for calls to your Telnyx phone numbers. Please check the <a href="https://support.telnyx.com/en/articles/8428806-global-channel-billing">Telnyx Support Articles</a> section for full information and examples of how to utilize Channel Billing.

### Resource `charges_breakdown`:

- `retrieve_charges_breakdown` (`read`): Retrieve a detailed breakdown of monthly charges for phone numbers in a specified date range. The date range cannot exceed 31 days.

### Resource `charges_summary`:

- `retrieve_charges_summary` (`read`): Retrieve a summary of monthly charges for a specified date range. The date range cannot exceed 31 days.

### Resource `comments`:

- `create_comments` (`write`): Create a comment
- `retrieve_comments` (`read`): Retrieve a comment
- `list_comments` (`read`): Retrieve all comments
- `mark_as_read_comments` (`write`): Mark a comment as read

### Resource `conferences`:

- `create_conferences` (`write`): Create a conference from an existing call leg using a `call_control_id` and a conference name. Upon creating the conference, the call will be automatically bridged to the conference. Conferences will expire after all participants have left the conference or after 4 hours regardless of the number of active participants.

  **Expected Webhooks:**

  - `conference.created`
  - `conference.participant.joined`
  - `conference.participant.left`
  - `conference.ended`
  - `conference.recording.saved`
  - `conference.floor.changed`

- `retrieve_conferences` (`read`): Retrieve an existing conference
- `list_conferences` (`read`): Lists conferences. Conferences are created on demand, and will expire after all participants have left the conference or after 4 hours regardless of the number of active participants. Conferences are listed in descending order by `expires_at`.
- `list_participants_conferences` (`read`): Lists conference participants

### Resource `conferences.actions`:

- `update_conferences_actions` (`write`): Update conference participant supervisor_role
- `hold_conferences_actions` (`write`): Hold a list of participants in a conference call
- `join_conferences_actions` (`write`): Join an existing call leg to a conference. Issue the Join Conference command with the conference ID in the path and the `call_control_id` of the leg you wish to join to the conference as an attribute. The conference can have up to a certain amount of active participants, as set by the `max_participants` parameter in conference creation request.

  **Expected Webhooks:**

  - `conference.participant.joined`
  - `conference.participant.left`

- `leave_conferences_actions` (`write`): Removes a call leg from a conference and moves it back to parked state.

  **Expected Webhooks:**

  - `conference.participant.left`

- `mute_conferences_actions` (`write`): Mute a list of participants in a conference call
- `play_conferences_actions` (`write`): Play audio to all or some participants on a conference call.
- `record_pause_conferences_actions` (`write`): Pause conference recording.
- `record_resume_conferences_actions` (`write`): Resume conference recording.
- `record_start_conferences_actions` (`write`): Start recording the conference. Recording will stop on conference end, or via the Stop Recording command.

  **Expected Webhooks:**

  - `conference.recording.saved`

- `record_stop_conferences_actions` (`write`): Stop recording the conference.

  **Expected Webhooks:**

  - `conference.recording.saved`

- `speak_conferences_actions` (`write`): Convert text to speech and play it to all or some participants.
- `stop_conferences_actions` (`write`): Stop audio being played to all or some participants on a conference call.
- `unhold_conferences_actions` (`write`): Unhold a list of participants in a conference call
- `unmute_conferences_actions` (`write`): Unmute a list of participants in a conference call

### Resource `connections`:

- `retrieve_connections` (`read`): Retrieves the high-level details of an existing connection. To retrieve specific authentication information, use the endpoint for the specific connection type.
- `list_connections` (`read`): Returns a list of your connections irrespective of type.
- `list_active_calls_connections` (`read`): Lists all active calls for given connection. Acceptable connections are either SIP connections with webhook_url or xml_request_url, call control or texml. Returned results are cursor paginated.

### Resource `country_coverage`:

- `retrieve_country_coverage` (`read`): Get country coverage
- `retrieve_country_country_coverage` (`read`): Get coverage for a specific country

### Resource `credential_connections`:

- `create_credential_connections` (`write`): Creates a credential connection.
- `retrieve_credential_connections` (`read`): Retrieves the details of an existing credential connection.
- `update_credential_connections` (`write`): Updates settings of an existing credential connection.
- `list_credential_connections` (`read`): Returns a list of your credential connections.
- `delete_credential_connections` (`write`): Deletes an existing credential connection.

### Resource `credential_connections.actions`:

- `check_registration_status_credential_connections_actions` (`write`): Checks the registration_status for a credential connection, (`registration_status`) as well as the timestamp for the last SIP registration event (`registration_status_updated_at`)

### Resource `custom_storage_credentials`:

- `create_custom_storage_credentials` (`write`): Creates a custom storage credentials configuration.
- `retrieve_custom_storage_credentials` (`read`): Returns the information about custom storage credentials.
- `update_custom_storage_credentials` (`write`): Updates a stored custom credentials configuration.
- `delete_custom_storage_credentials` (`write`): Deletes a stored custom credentials configuration.

### Resource `customer_service_records`:

- `create_customer_service_records` (`write`): Create a new customer service record for the provided phone number.
- `retrieve_customer_service_records` (`read`): Get a specific customer service record.
- `list_customer_service_records` (`read`): List customer service records.
- `verify_phone_number_coverage_customer_service_records` (`write`): Verify the coverage for a list of phone numbers.

### Resource `detail_records`:

- `list_detail_records` (`read`): Search for any detail record across the Telnyx Platform

### Resource `dialogflow_connections`:

- `create_dialogflow_connections` (`write`): Save Dialogflow Credentiails to Telnyx, so it can be used with other Telnyx services.
- `retrieve_dialogflow_connections` (`read`): Return details of the Dialogflow connection associated with the given CallControl connection.
- `update_dialogflow_connections` (`write`): Updates a stored Dialogflow Connection.
- `delete_dialogflow_connections` (`write`): Deletes a stored Dialogflow Connection.

### Resource `document_links`:

- `list_document_links` (`read`): List all documents links ordered by created_at descending.

### Resource `documents`:

- `retrieve_documents` (`read`): Retrieve a document.
- `update_documents` (`write`): Update a document.
- `list_documents` (`read`): List all documents ordered by created_at descending.
- `delete_documents` (`write`): Delete a document.<br /><br />A document can only be deleted if it's not linked to a service. If it is linked to a service, it must be unlinked prior to deleting.
- `download_documents` (`read`): Download a document.
- `generate_download_link_documents` (`read`): Generates a temporary pre-signed URL that can be used to download the document directly from the storage backend without authentication.
- `upload_documents` (`write`): Upload a document.<br /><br />Uploaded files must be linked to a service within 30 minutes or they will be automatically deleted.
- `upload_json_documents` (`write`): Upload a document.<br /><br />Uploaded files must be linked to a service within 30 minutes or they will be automatically deleted.

### Resource `dynamic_emergency_addresses`:

- `create_dynamic_emergency_addresses` (`write`): Creates a dynamic emergency address.
- `retrieve_dynamic_emergency_addresses` (`read`): Returns the dynamic emergency address based on the ID provided
- `list_dynamic_emergency_addresses` (`read`): Returns the dynamic emergency addresses according to filters
- `delete_dynamic_emergency_addresses` (`write`): Deletes the dynamic emergency address based on the ID provided

### Resource `dynamic_emergency_endpoints`:

- `create_dynamic_emergency_endpoints` (`write`): Creates a dynamic emergency endpoints.
- `retrieve_dynamic_emergency_endpoints` (`read`): Returns the dynamic emergency endpoint based on the ID provided
- `list_dynamic_emergency_endpoints` (`read`): Returns the dynamic emergency endpoints according to filters
- `delete_dynamic_emergency_endpoints` (`write`): Deletes the dynamic emergency endpoint based on the ID provided

### Resource `enum`:

- `retrieve_enum` (`read`): Get Enum

### Resource `external_connections`:

- `create_external_connections` (`write`): Creates a new External Connection based on the parameters sent in the request. The external_sip_connection and outbound voice profile id are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.
- `retrieve_external_connections` (`read`): Return the details of an existing External Connection inside the 'data' attribute of the response.
- `update_external_connections` (`write`): Updates settings of an existing External Connection based on the parameters of the request.
- `list_external_connections` (`read`): This endpoint returns a list of your External Connections inside the 'data' attribute of the response. External Connections are used by Telnyx customers to seamless configure SIP trunking integrations with Telnyx Partners, through External Voice Integrations in Mission Control Portal.
- `delete_external_connections` (`write`): Permanently deletes an External Connection. Deletion may be prevented if the application is in use by phone numbers, is active, or if it is an Operator Connect connection. To remove an Operator Connect integration please contact Telnyx support.
- `update_location_external_connections` (`write`): Update a location's static emergency address

### Resource `external_connections.log_messages`:

- `retrieve_external_connections_log_messages` (`read`): Retrieve a log message for an external connection associated with your account.
- `list_external_connections_log_messages` (`read`): Retrieve a list of log messages for all external connections associated with your account.
- `dismiss_external_connections_log_messages` (`write`): Dismiss a log message for an external connection associated with your account.

### Resource `external_connections.civic_addresses`:

- `retrieve_external_connections_civic_addresses` (`read`): Return the details of an existing Civic Address with its Locations inside the 'data' attribute of the response.
- `list_external_connections_civic_addresses` (`read`): Returns the civic addresses and locations from Microsoft Teams.

### Resource `external_connections.phone_numbers`:

- `retrieve_external_connections_phone_numbers` (`read`): Return the details of a phone number associated with the given external connection.
- `update_external_connections_phone_numbers` (`write`): Asynchronously update settings of the phone number associated with the given external connection.
- `list_external_connections_phone_numbers` (`read`): Returns a list of all active phone numbers associated with the given external connection.

### Resource `external_connections.releases`:

- `retrieve_external_connections_releases` (`read`): Return the details of a Release request and its phone numbers.
- `list_external_connections_releases` (`read`): Returns a list of your Releases for the given external connection. These are automatically created when you change the `connection_id` of a phone number that is currently on Microsoft Teams.

### Resource `external_connections.uploads`:

- `create_external_connections_uploads` (`write`): Creates a new Upload request to Microsoft teams with the included phone numbers. Only one of civic_address_id or location_id must be provided, not both. The maximum allowed phone numbers for the numbers_ids array is 1000.
- `retrieve_external_connections_uploads` (`read`): Return the details of an Upload request and its phone numbers.
- `list_external_connections_uploads` (`read`): Returns a list of your Upload requests for the given external connection.
- `pending_count_external_connections_uploads` (`read`): Returns the count of all pending upload requests for the given external connection.
- `refresh_status_external_connections_uploads` (`write`): Forces a recheck of the status of all pending Upload requests for the given external connection in the background.
- `retry_external_connections_uploads` (`write`): If there were any errors during the upload process, this endpoint will retry the upload request. In some cases this will reattempt the existing upload request, in other cases it may create a new upload request. Please check the ticket_id in the response to determine if a new upload request was created.

### Resource `fax_applications`:

- `create_fax_applications` (`write`): Creates a new Fax Application based on the parameters sent in the request. The application name and webhook URL are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.
- `retrieve_fax_applications` (`read`): Return the details of an existing Fax Application inside the 'data' attribute of the response.
- `update_fax_applications` (`write`): Updates settings of an existing Fax Application based on the parameters of the request.
- `list_fax_applications` (`read`): This endpoint returns a list of your Fax Applications inside the 'data' attribute of the response. You can adjust which applications are listed by using filters. Fax Applications are used to configure how you send and receive faxes using the Programmable Fax API with Telnyx.
- `delete_fax_applications` (`write`): Permanently deletes a Fax Application. Deletion may be prevented if the application is in use by phone numbers.

### Resource `faxes`:

- `create_faxes` (`write`): Send a fax. Files have size limits and page count limit validations. If a file is bigger than 50MB or has more than 350 pages it will fail with `file_size_limit_exceeded` and `page_count_limit_exceeded` respectively.

  **Expected Webhooks:**

  - `fax.queued`
  - `fax.media.processed`
  - `fax.sending.started`
  - `fax.delivered`
  - `fax.failed`

- `retrieve_faxes` (`read`): View a fax
- `list_faxes` (`read`): View a list of faxes
- `delete_faxes` (`write`): Delete a fax

### Resource `faxes.actions`:

- `cancel_faxes_actions` (`write`): Cancel the outbound fax that is in one of the following states: `queued`, `media.processed`, `originated` or `sending`
- `refresh_faxes_actions` (`write`): Refreshes the inbound fax's media_url when it has expired

### Resource `fqdn_connections`:

- `create_fqdn_connections` (`write`): Creates a FQDN connection.
- `retrieve_fqdn_connections` (`read`): Retrieves the details of an existing FQDN connection.
- `update_fqdn_connections` (`write`): Updates settings of an existing FQDN connection.
- `list_fqdn_connections` (`read`): Returns a list of your FQDN connections.
- `delete_fqdn_connections` (`write`): Deletes an FQDN connection.

### Resource `fqdns`:

- `create_fqdns` (`write`): Create a new FQDN object.
- `retrieve_fqdns` (`read`): Return the details regarding a specific FQDN.
- `update_fqdns` (`write`): Update the details of a specific FQDN.
- `list_fqdns` (`read`): Get all FQDNs belonging to the user that match the given filters.
- `delete_fqdns` (`write`): Delete an FQDN.

### Resource `global_ip_allowed_ports`:

- `list_global_ip_allowed_ports` (`read`): List all Global IP Allowed Ports

### Resource `global_ip_assignment_health`:

- `retrieve_global_ip_assignment_health` (`read`): Global IP Assignment Health Check Metrics

### Resource `global_ip_assignments`:

- `create_global_ip_assignments` (`write`): Create a Global IP assignment.
- `retrieve_global_ip_assignments` (`read`): Retrieve a Global IP assignment.
- `update_global_ip_assignments` (`write`): Update a Global IP assignment.
- `list_global_ip_assignments` (`read`): List all Global IP assignments.
- `delete_global_ip_assignments` (`write`): Delete a Global IP assignment.

### Resource `global_ip_assignments_usage`:

- `retrieve_global_ip_assignments_usage` (`read`): Global IP Assignment Usage Metrics

### Resource `global_ip_health_check_types`:

- `list_global_ip_health_check_types` (`read`): List all Global IP Health check types.

### Resource `global_ip_health_checks`:

- `create_global_ip_health_checks` (`write`): Create a Global IP health check.
- `retrieve_global_ip_health_checks` (`read`): Retrieve a Global IP health check.
- `list_global_ip_health_checks` (`read`): List all Global IP health checks.
- `delete_global_ip_health_checks` (`write`): Delete a Global IP health check.

### Resource `global_ip_latency`:

- `retrieve_global_ip_latency` (`read`): Global IP Latency Metrics

### Resource `global_ip_protocols`:

- `list_global_ip_protocols` (`read`): List all Global IP Protocols

### Resource `global_ip_usage`:

- `retrieve_global_ip_usage` (`read`): Global IP Usage Metrics

### Resource `global_ips`:

- `create_global_ips` (`write`): Create a Global IP.
- `retrieve_global_ips` (`read`): Retrieve a Global IP.
- `list_global_ips` (`read`): List all Global IPs.
- `delete_global_ips` (`write`): Delete a Global IP.

### Resource `inbound_channels`:

- `update_inbound_channels` (`write`): Update the number of Voice Channels for the US Zone. This allows your account to handle multiple simultaneous inbound calls to US numbers. Use this endpoint to increase or decrease your capacity based on expected call volume.
- `list_inbound_channels` (`read`): Returns the US Zone voice channels for your account. voice channels allows you to use Channel Billing for calls to your Telnyx phone numbers. Please check the <a href="https://support.telnyx.com/en/articles/8428806-global-channel-billing">Telnyx Support Articles</a> section for full information and examples of how to utilize Channel Billing.

### Resource `integration_secrets`:

- `create_integration_secrets` (`write`): Create a new secret with an associated identifier that can be used to securely integrate with other services.
- `list_integration_secrets` (`read`): Retrieve a list of all integration secrets configured by the user.
- `delete_integration_secrets` (`write`): Delete an integration secret given its ID.

### Resource `inventory_coverage`:

- `list_inventory_coverage` (`read`): Creates an inventory coverage request. If locality, npa or national_destination_code is used in groupBy, and no region or locality filters are used, the whole paginated set is returned.

### Resource `invoices`:

- `retrieve_invoices` (`read`): Retrieve a single invoice by its unique identifier.
- `list_invoices` (`read`): Retrieve a paginated list of invoices.

### Resource `ip_connections`:

- `create_ip_connections` (`write`): Creates an IP connection.
- `retrieve_ip_connections` (`read`): Retrieves the details of an existing ip connection.
- `update_ip_connections` (`write`): Updates settings of an existing IP connection.
- `list_ip_connections` (`read`): Returns a list of your IP connections.
- `delete_ip_connections` (`write`): Deletes an existing IP connection.

### Resource `ips`:

- `create_ips` (`write`): Create a new IP object.
- `retrieve_ips` (`read`): Return the details regarding a specific IP.
- `update_ips` (`write`): Update the details of a specific IP.
- `list_ips` (`read`): Get all IPs belonging to the user that match the given filters.
- `delete_ips` (`write`): Delete an IP.

### Resource `ledger_billing_group_reports`:

- `create_ledger_billing_group_reports` (`write`): Create a ledger billing group report
- `retrieve_ledger_billing_group_reports` (`read`): Get a ledger billing group report

### Resource `list`:

- `retrieve_all_list` (`read`): Retrieve a list of all phone numbers using Channel Billing, grouped by Zone.
- `retrieve_by_zone_list` (`read`): Retrieve a list of phone numbers using Channel Billing for a specific Zone.

### Resource `managed_accounts`:

- `create_managed_accounts` (`write`): Create a new managed account owned by the authenticated user. You need to be explictly approved by Telnyx in order to become a manager account.
- `retrieve_managed_accounts` (`read`): Retrieves the details of a single managed account.
- `update_managed_accounts` (`write`): Update a single managed account.
- `list_managed_accounts` (`read`): Lists the accounts managed by the current user. Users need to be explictly approved by Telnyx in order to become manager accounts.
- `get_allocatable_global_outbound_channels_managed_accounts` (`read`): Display information about allocatable global outbound channels for the current user. Only usable by account managers.
- `update_global_channel_limit_managed_accounts` (`write`): Update the amount of allocatable global outbound channels allocated to a specific managed account.

### Resource `managed_accounts.actions`:

- `disable_managed_accounts_actions` (`write`): Disables a managed account, forbidding it to use Telnyx services, including sending or receiving phone calls and SMS messages. Ongoing phone calls will not be affected. The managed account and its sub-users will no longer be able to log in via the mission control portal.
- `enable_managed_accounts_actions` (`write`): Enables a managed account and its sub-users to use Telnyx services.

### Resource `media`:

- `retrieve_media` (`read`): Returns the information about a stored media file.
- `update_media` (`write`): Updates a stored media file.
- `list_media` (`read`): Returns a list of stored media files.
- `delete_media` (`write`): Deletes a stored media file.
- `download_media` (`read`): Downloads a stored media file.
- `upload_media` (`write`): Upload media file to Telnyx so it can be used with other Telnyx services

### Resource `messages`:

- `retrieve_messages` (`read`): Note: This API endpoint can only retrieve messages that are no older than 10 days since their creation. If you require messages older than this, please generate an [MDR report.](https://developers.telnyx.com/api/v1/mission-control/add-mdr-request)
- `cancel_scheduled_messages` (`write`): Cancel a scheduled message that has not yet been sent. Only messages with `status=scheduled` and `send_at` more than a minute from now can be cancelled.
- `schedule_messages` (`write`): Schedule a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number Pool.

  This endpoint allows you to schedule a message with any messaging resource.
  Current messaging resources include: long-code, short-code, number-pool, and
  alphanumeric-sender-id.

- `send_messages` (`write`): Send a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number Pool.

  This endpoint allows you to send a message with any messaging resource.
  Current messaging resources include: long-code, short-code, number-pool, and
  alphanumeric-sender-id.

- `send_group_mms_messages` (`write`): Send a group MMS message
- `send_long_code_messages` (`write`): Send a long code message
- `send_number_pool_messages` (`write`): Send a message using number pool
- `send_short_code_messages` (`write`): Send a short code message

### Resource `messages.rcs`:

- `generate_deeplink_messages_rcs` (`read`): Generate a deeplink URL that can be used to start an RCS conversation with a specific agent.

### Resource `messaging.rcs`:

- `invite_test_number_messaging_rcs` (`write`): Adds a test phone number to an RCS agent for testing purposes.
- `list_bulk_capabilities_messaging_rcs` (`write`): List RCS capabilities of a given batch of phone numbers
- `retrieve_capabilities_messaging_rcs` (`read`): List RCS capabilities of a phone number

### Resource `messaging.rcs.agents`:

- `retrieve_rcs_messaging_agents` (`read`): Retrieve an RCS agent
- `update_rcs_messaging_agents` (`write`): Modify an RCS agent
- `list_rcs_messaging_agents` (`read`): List all RCS agents

### Resource `messaging_hosted_number_orders`:

- `create_messaging_hosted_number_orders` (`write`): Create a messaging hosted number order
- `retrieve_messaging_hosted_number_orders` (`read`): Retrieve a messaging hosted number order
- `list_messaging_hosted_number_orders` (`read`): List messaging hosted number orders
- `delete_messaging_hosted_number_orders` (`write`): Delete a messaging hosted number order and all associated phone numbers.
- `check_eligibility_messaging_hosted_number_orders` (`write`): Check eligibility of phone numbers for hosted messaging
- `create_verification_codes_messaging_hosted_number_orders` (`write`): Create verification codes to validate numbers of the hosted order. The verification codes will be sent to the numbers of the hosted order.
- `validate_codes_messaging_hosted_number_orders` (`write`): Validate the verification codes sent to the numbers of the hosted order. The verification codes must be created in the verification codes endpoint.

### Resource `messaging_hosted_number_orders.actions`:

- `upload_file_messaging_hosted_number_orders_actions` (`write`): Upload file required for a messaging hosted number order

### Resource `messaging_hosted_numbers`:

- `delete_messaging_hosted_numbers` (`write`): Delete a messaging hosted number

### Resource `messaging_numbers_bulk_updates`:

- `create_messaging_numbers_bulk_updates` (`write`): Update the messaging profile of multiple phone numbers
- `retrieve_messaging_numbers_bulk_updates` (`read`): Retrieve bulk update status

### Resource `messaging_optouts`:

- `list_messaging_optouts` (`read`): Retrieve a list of opt-out blocks.

### Resource `messaging_profiles`:

- `create_messaging_profiles` (`write`): Create a messaging profile
- `retrieve_messaging_profiles` (`read`): Retrieve a messaging profile
- `update_messaging_profiles` (`write`): Update a messaging profile
- `list_messaging_profiles` (`read`): List messaging profiles
- `delete_messaging_profiles` (`write`): Delete a messaging profile
- `list_phone_numbers_messaging_profiles` (`read`): List phone numbers associated with a messaging profile
- `list_short_codes_messaging_profiles` (`read`): List short codes associated with a messaging profile

### Resource `messaging_profiles.autoresp_configs`:

- `create_messaging_profiles_autoresp_configs` (`write`): Create Auto-Reponse Setting
- `retrieve_messaging_profiles_autoresp_configs` (`read`): Get Auto-Response Setting
- `update_messaging_profiles_autoresp_configs` (`write`): Update Auto-Response Setting
- `list_messaging_profiles_autoresp_configs` (`read`): List Auto-Response Settings
- `delete_messaging_profiles_autoresp_configs` (`write`): Delete Auto-Response Setting

### Resource `messaging_tollfree.verification.requests`:

- `create_verification_messaging_tollfree_requests` (`write`): Submit a new tollfree verification request
- `retrieve_verification_messaging_tollfree_requests` (`read`): Get a single verification request by its ID.
- `update_verification_messaging_tollfree_requests` (`write`): Update an existing tollfree verification request. This is particularly useful when there are pending customer actions to be taken.
- `list_verification_messaging_tollfree_requests` (`read`): Get a list of previously-submitted tollfree verification requests
- `delete_verification_messaging_tollfree_requests` (`write`): Delete a verification request

  A request may only be deleted when when the request is in the "rejected" state.

  - `HTTP 200`: request successfully deleted
  - `HTTP 400`: request exists but can't be deleted (i.e. not rejected)
  - `HTTP 404`: request unknown or already deleted

### Resource `messaging_url_domains`:

- `list_messaging_url_domains` (`read`): List messaging URL domains

### Resource `messsages`:

- `rcs_messsages` (`write`): Send an RCS message

### Resource `mobile_network_operators`:

- `list_mobile_network_operators` (`read`): Telnyx has a set of GSM mobile operators partners that are available through our mobile network roaming. This resource is entirely managed by Telnyx and may change over time. That means that this resource won't allow any write operations for it. Still, it's available so it can be used as a support resource that can be related to other resources or become a configuration option.

### Resource `mobile_push_credentials`:

- `create_mobile_push_credentials` (`write`): Creates a new mobile push credential
- `retrieve_mobile_push_credentials` (`read`): Retrieves mobile push credential based on the given `push_credential_id`
- `list_mobile_push_credentials` (`read`): List mobile push credentials
- `delete_mobile_push_credentials` (`write`): Deletes a mobile push credential based on the given `push_credential_id`

### Resource `network_coverage`:

- `list_network_coverage` (`read`): List all locations and the interfaces that region supports

### Resource `networks`:

- `create_networks` (`write`): Create a new Network.
- `retrieve_networks` (`read`): Retrieve a Network.
- `update_networks` (`write`): Update a Network.
- `list_networks` (`read`): List all Networks.
- `delete_networks` (`write`): Delete a Network.
- `list_interfaces_networks` (`read`): List all Interfaces for a Network.

### Resource `networks.default_gateway`:

- `create_networks_default_gateway` (`write`): Create Default Gateway.
- `retrieve_networks_default_gateway` (`read`): Get Default Gateway status.
- `delete_networks_default_gateway` (`write`): Delete Default Gateway.

### Resource `notification_channels`:

- `create_notification_channels` (`write`): Create a notification channel.
- `retrieve_notification_channels` (`read`): Get a notification channel.
- `update_notification_channels` (`write`): Update a notification channel.
- `list_notification_channels` (`read`): List notification channels.
- `delete_notification_channels` (`write`): Delete a notification channel.

### Resource `notification_event_conditions`:

- `list_notification_event_conditions` (`read`): Returns a list of your notifications events conditions.

### Resource `notification_events`:

- `list_notification_events` (`read`): Returns a list of your notifications events.

### Resource `notification_profiles`:

- `create_notification_profiles` (`write`): Create a notification profile.
- `retrieve_notification_profiles` (`read`): Get a notification profile.
- `update_notification_profiles` (`write`): Update a notification profile.
- `list_notification_profiles` (`read`): Returns a list of your notifications profiles.
- `delete_notification_profiles` (`write`): Delete a notification profile.

### Resource `notification_settings`:

- `create_notification_settings` (`write`): Add a notification setting.
- `retrieve_notification_settings` (`read`): Get a notification setting.
- `list_notification_settings` (`read`): List notification settings.
- `delete_notification_settings` (`write`): Delete a notification setting.

### Resource `number_block_orders`:

- `create_number_block_orders` (`write`): Creates a phone number block order.
- `retrieve_number_block_orders` (`read`): Get an existing phone number block order.
- `list_number_block_orders` (`read`): Get a paginated list of number block orders.

### Resource `number_lookup`:

- `retrieve_number_lookup` (`read`): Returns information about the provided phone number.

### Resource `number_order_phone_numbers`:

- `retrieve_number_order_phone_numbers` (`read`): Get an existing phone number in number order.
- `list_number_order_phone_numbers` (`read`): Get a list of phone numbers associated to orders.
- `update_requirement_group_number_order_phone_numbers` (`write`): Update requirement group for a phone number order
- `update_requirements_number_order_phone_numbers` (`write`): Updates requirements for a single phone number within a number order.

### Resource `number_orders`:

- `create_number_orders` (`write`): Creates a phone number order.
- `retrieve_number_orders` (`read`): Get an existing phone number order.
- `update_number_orders` (`write`): Updates a phone number order.
- `list_number_orders` (`read`): Get a paginated list of number orders.

### Resource `number_reservations`:

- `create_number_reservations` (`write`): Creates a Phone Number Reservation for multiple numbers.
- `retrieve_number_reservations` (`read`): Gets a single phone number reservation.
- `list_number_reservations` (`read`): Gets a paginated list of phone number reservations.

### Resource `number_reservations.actions`:

- `extend_number_reservations_actions` (`write`): Extends reservation expiry time on all phone numbers.

### Resource `numbers_features`:

- `create_numbers_features` (`write`): Retrieve the features for a list of numbers

### Resource `operator_connect.actions`:

- `refresh_operator_connect_actions` (`write`): This endpoint will make an asynchronous request to refresh the Operator Connect integration with Microsoft Teams for the current user. This will create new external connections on the user's account if needed, and/or report the integration results as [log messages](https://developers.telnyx.com/api/external-voice-integrations/list-external-connection-log-messages).

### Resource `ota_updates`:

- `retrieve_ota_updates` (`read`): This API returns the details of an Over the Air (OTA) update.
- `list_ota_updates` (`read`): List OTA updates

### Resource `outbound_voice_profiles`:

- `create_outbound_voice_profiles` (`write`): Create an outbound voice profile.
- `retrieve_outbound_voice_profiles` (`read`): Retrieves the details of an existing outbound voice profile.
- `update_outbound_voice_profiles` (`write`): Updates an existing outbound voice profile.
- `list_outbound_voice_profiles` (`read`): Get all outbound voice profiles belonging to the user that match the given filters.
- `delete_outbound_voice_profiles` (`write`): Deletes an existing outbound voice profile.

### Resource `payment.auto_recharge_prefs`:

- `update_payment_auto_recharge_prefs` (`write`): Update payment auto recharge preferences.
- `list_payment_auto_recharge_prefs` (`read`): Returns the payment auto recharge preferences.

### Resource `phone_number_assignment_by_profile`:

- `assign_phone_number_assignment_by_profile` (`write`): This endpoint allows you to link all phone numbers associated with a Messaging Profile to a campaign. **Please note:** if you want to assign phone numbers to a campaign that you did not create with Telnyx 10DLC services, this endpoint allows that provided that you've shared the campaign with Telnyx. In this case, only provide the parameter, `tcrCampaignId`, and not `campaignId`. In all other cases (where the campaign you're assigning was created with Telnyx 10DLC services), only provide `campaignId`, not `tcrCampaignId`.
- `retrieve_phone_number_status_phone_number_assignment_by_profile` (`read`): Check the status of the individual phone number/campaign assignments associated with the supplied `taskId`.
- `retrieve_status_phone_number_assignment_by_profile` (`read`): Check the status of the task associated with assigning all phone numbers on a messaging profile to a campaign by `taskId`.

### Resource `phone_number_blocks.jobs`:

- `retrieve_phone_number_blocks_jobs` (`read`): Retrieves a phone number blocks job
- `list_phone_number_blocks_jobs` (`read`): Lists the phone number blocks jobs
- `delete_phone_number_block_phone_number_blocks_jobs` (`write`): Creates a new background job to delete all the phone numbers associated with the given block. We will only consider the phone number block as deleted after all phone numbers associated with it are removed, so multiple executions of this job may be necessary in case some of the phone numbers present errors during the deletion process.

### Resource `phone_number_campaigns`:

- `create_phone_number_campaigns` (`write`): Create New Phone Number Campaign
- `retrieve_phone_number_campaigns` (`read`): Retrieve an individual phone number/campaign assignment by `phoneNumber`.
- `update_phone_number_campaigns` (`write`): Create New Phone Number Campaign
- `list_phone_number_campaigns` (`read`): Retrieve All Phone Number Campaigns
- `delete_phone_number_campaigns` (`write`): This endpoint allows you to remove a campaign assignment from the supplied `phoneNumber`.

### Resource `phone_numbers`:

- `retrieve_phone_numbers` (`read`): Retrieve a phone number
- `update_phone_numbers` (`write`): Update a phone number
- `list_phone_numbers` (`read`): List phone numbers
- `delete_phone_numbers` (`write`): Delete a phone number
- `slim_list_phone_numbers` (`read`): List phone numbers, This endpoint is a lighter version of the /phone_numbers endpoint having higher performance and rate limit.

### Resource `phone_numbers.actions`:

- `change_bundle_status_phone_numbers_actions` (`write`): Change the bundle status for a phone number (set to being in a bundle or remove from a bundle)
- `enable_emergency_phone_numbers_actions` (`write`): Enable emergency for a phone number
- `verify_ownership_phone_numbers_actions` (`write`): Verifies ownership of the provided phone numbers and returns a mapping of numbers to their IDs, plus a list of numbers not found in the account.

### Resource `phone_numbers.csv_downloads`:

- `create_phone_numbers_csv_downloads` (`write`): Create a CSV download
- `retrieve_phone_numbers_csv_downloads` (`read`): Retrieve a CSV download
- `list_phone_numbers_csv_downloads` (`read`): List CSV downloads

### Resource `phone_numbers.jobs`:

- `retrieve_phone_numbers_jobs` (`read`): Retrieve a phone numbers job
- `list_phone_numbers_jobs` (`read`): Lists the phone numbers jobs
- `delete_batch_phone_numbers_jobs` (`write`): Creates a new background job to delete a batch of numbers. At most one thousand numbers can be updated per API call.
- `update_batch_phone_numbers_jobs` (`write`): Creates a new background job to update a batch of numbers. At most one thousand numbers can be updated per API call. At least one of the updateable fields must be submitted. IMPORTANT: You must either specify filters (using the filter parameters) or specific phone numbers (using the phone_numbers parameter in the request body). If you specify filters, ALL phone numbers that match the given filters (up to 1000 at a time) will be updated. If you want to update only specific numbers, you must use the phone_numbers parameter in the request body. When using the phone_numbers parameter, ensure you follow the correct format as shown in the example (either phone number IDs or phone numbers in E164 format).
- `update_emergency_settings_batch_phone_numbers_jobs` (`write`): Creates a background job to update the emergency settings of a collection of phone numbers. At most one thousand numbers can be updated per API call.

### Resource `phone_numbers.messaging`:

- `retrieve_phone_numbers_messaging` (`read`): Retrieve a phone number with messaging settings
- `update_phone_numbers_messaging` (`write`): Update the messaging profile and/or messaging product of a phone number
- `list_phone_numbers_messaging` (`read`): List phone numbers with messaging settings

### Resource `phone_numbers.voice`:

- `retrieve_phone_numbers_voice` (`read`): Retrieve a phone number with voice settings
- `update_phone_numbers_voice` (`write`): Update a phone number with voice settings
- `list_phone_numbers_voice` (`read`): List phone numbers with voice settings

### Resource `phone_numbers.voicemail`:

- `create_phone_numbers_voicemail` (`write`): Create voicemail settings for a phone number
- `retrieve_phone_numbers_voicemail` (`read`): Returns the voicemail settings for a phone number
- `update_phone_numbers_voicemail` (`write`): Update voicemail settings for a phone number

### Resource `phone_numbers_regulatory_requirements`:

- `retrieve_phone_numbers_regulatory_requirements` (`read`): Retrieve regulatory requirements for a list of phone numbers

### Resource `portability_checks`:

- `run_portability_checks` (`write`): Runs a portability check, returning the results immediately.

### Resource `porting`:

- `list_uk_carriers_porting` (`read`): List available carriers in the UK.

### Resource `porting.events`:

- `retrieve_porting_events` (`read`): Show a specific porting event.
- `list_porting_events` (`read`): Returns a list of all porting events.
- `republish_porting_events` (`write`): Republish a specific porting event.

### Resource `porting.reports`:

- `create_porting_reports` (`write`): Generate reports about porting operations.
- `retrieve_porting_reports` (`read`): Retrieve a specific report generated.
- `list_porting_reports` (`read`): List the reports generated about porting operations.

### Resource `porting.loa_configurations`:

- `create_porting_loa_configurations` (`write`): Create a LOA configuration.
- `retrieve_porting_loa_configurations` (`read`): Retrieve a specific LOA configuration.
- `update_porting_loa_configurations` (`write`): Update a specific LOA configuration.
- `list_porting_loa_configurations` (`read`): List the LOA configurations.
- `delete_porting_loa_configurations` (`write`): Delete a specific LOA configuration.
- `preview_0_porting_loa_configurations` (`write`): Preview the LOA template that would be generated without need to create LOA configuration.
- `preview_1_porting_loa_configurations` (`read`): Preview a specific LOA configuration.

### Resource `porting_orders`:

- `create_porting_orders` (`write`): Creates a new porting order object.
- `retrieve_porting_orders` (`read`): Retrieves the details of an existing porting order.
- `update_porting_orders` (`write`): Edits the details of an existing porting order.

  Any or all of a porting orders attributes may be included in the resource object included in a PATCH request.

  If a request does not include all of the attributes for a resource, the system will interpret the missing attributes as if they were included with their current values. To explicitly set something to null, it must be included in the request with a null value.

- `list_porting_orders` (`read`): Returns a list of your porting order.
- `delete_porting_orders` (`write`): Deletes an existing porting order. This operation is restrict to porting orders in draft state.
- `retrieve_allowed_foc_windows_porting_orders` (`read`): Returns a list of allowed FOC dates for a porting order.
- `retrieve_exception_types_porting_orders` (`read`): Returns a list of all possible exception types for a porting order.
- `retrieve_loa_template_porting_orders` (`read`): Download a porting order loa template
- `retrieve_requirements_porting_orders` (`read`): Returns a list of all requirements based on country/number type for this porting order.
- `retrieve_sub_request_porting_orders` (`read`): Retrieve the associated V1 sub_request_id and port_request_id

### Resource `porting_orders.phone_number_configurations`:

- `create_porting_orders_phone_number_configurations` (`write`): Creates a list of phone number configurations.
- `list_porting_orders_phone_number_configurations` (`read`): Returns a list of phone number configurations paginated.

### Resource `porting_orders.actions`:

- `activate_porting_orders_actions` (`write`): Activate each number in a porting order asynchronously. This operation is limited to US FastPort orders only.
- `cancel_porting_orders_actions` (`write`): Cancel a porting order
- `confirm_porting_orders_actions` (`write`): Confirm and submit your porting order.
- `share_porting_orders_actions` (`write`): Creates a sharing token for a porting order. The token can be used to share the porting order with non-Telnyx users.

### Resource `porting_orders.activation_jobs`:

- `retrieve_porting_orders_activation_jobs` (`read`): Returns a porting activation job.
- `update_porting_orders_activation_jobs` (`write`): Updates the activation time of a porting activation job.
- `list_porting_orders_activation_jobs` (`read`): Returns a list of your porting activation jobs.

### Resource `porting_orders.additional_documents`:

- `create_porting_orders_additional_documents` (`write`): Creates a list of additional documents for a porting order.
- `list_porting_orders_additional_documents` (`read`): Returns a list of additional documents for a porting order.
- `delete_porting_orders_additional_documents` (`write`): Deletes an additional document for a porting order.

### Resource `porting_orders.comments`:

- `create_porting_orders_comments` (`write`): Creates a new comment for a porting order.
- `list_porting_orders_comments` (`read`): Returns a list of all comments of a porting order.

### Resource `porting_orders.verification_codes`:

- `list_porting_orders_verification_codes` (`read`): Returns a list of verification codes for a porting order.
- `send_porting_orders_verification_codes` (`write`): Send the verification code for all porting phone numbers.
- `verify_porting_orders_verification_codes` (`write`): Verifies the verification code for a list of phone numbers.

### Resource `porting_orders.action_requirements`:

- `list_porting_orders_action_requirements` (`read`): Returns a list of action requirements for a specific porting order.
- `initiate_porting_orders_action_requirements` (`write`): Initiates a specific action requirement for a porting order.

### Resource `porting_orders.associated_phone_numbers`:

- `create_porting_orders_associated_phone_numbers` (`write`): Creates a new associated phone number for a porting order. This is used for partial porting in GB to specify which phone numbers should be kept or disconnected.
- `list_porting_orders_associated_phone_numbers` (`read`): Returns a list of all associated phone numbers for a porting order. Associated phone numbers are used for partial porting in GB to specify which phone numbers should be kept or disconnected.
- `delete_porting_orders_associated_phone_numbers` (`write`): Deletes an associated phone number from a porting order.

### Resource `porting_orders.phone_number_blocks`:

- `create_porting_orders_phone_number_blocks` (`write`): Creates a new phone number block.
- `list_porting_orders_phone_number_blocks` (`read`): Returns a list of all phone number blocks of a porting order.
- `delete_porting_orders_phone_number_blocks` (`write`): Deletes a phone number block.

### Resource `porting_orders.phone_number_extensions`:

- `create_porting_orders_phone_number_extensions` (`write`): Creates a new phone number extension.
- `list_porting_orders_phone_number_extensions` (`read`): Returns a list of all phone number extensions of a porting order.
- `delete_porting_orders_phone_number_extensions` (`write`): Deletes a phone number extension.

### Resource `porting_phone_numbers`:

- `list_porting_phone_numbers` (`read`): Returns a list of your porting phone numbers.

### Resource `portouts`:

- `retrieve_portouts` (`read`): Returns the portout request based on the ID provided
- `list_portouts` (`read`): Returns the portout requests according to filters
- `list_rejection_codes_portouts` (`read`): Given a port-out ID, list rejection codes that are eligible for that port-out
- `update_status_portouts` (`write`): Authorize or reject portout request

### Resource `portouts.events`:

- `retrieve_portouts_events` (`read`): Show a specific port-out event.
- `list_portouts_events` (`read`): Returns a list of all port-out events.
- `republish_portouts_events` (`write`): Republish a specific port-out event.

### Resource `portouts.reports`:

- `create_portouts_reports` (`write`): Generate reports about port-out operations.
- `retrieve_portouts_reports` (`read`): Retrieve a specific report generated.
- `list_portouts_reports` (`read`): List the reports generated about port-out operations.

### Resource `portouts.comments`:

- `create_portouts_comments` (`write`): Creates a comment on a portout request.
- `list_portouts_comments` (`read`): Returns a list of comments for a portout request.

### Resource `portouts.supporting_documents`:

- `create_portouts_supporting_documents` (`write`): Creates a list of supporting documents on a portout request.
- `list_portouts_supporting_documents` (`read`): List every supporting documents for a portout request.

### Resource `private_wireless_gateways`:

- `create_private_wireless_gateways` (`write`): Asynchronously create a Private Wireless Gateway for SIM cards for a previously created network. This operation may take several minutes so you can check the Private Wireless Gateway status at the section Get a Private Wireless Gateway.
- `retrieve_private_wireless_gateways` (`read`): Retrieve information about a Private Wireless Gateway.
- `list_private_wireless_gateways` (`read`): Get all Private Wireless Gateways belonging to the user.
- `delete_private_wireless_gateways` (`write`): Deletes the Private Wireless Gateway.

### Resource `public_internet_gateways`:

- `create_public_internet_gateways` (`write`): Create a new Public Internet Gateway.
- `retrieve_public_internet_gateways` (`read`): Retrieve a Public Internet Gateway.
- `list_public_internet_gateways` (`read`): List all Public Internet Gateways.
- `delete_public_internet_gateways` (`write`): Delete a Public Internet Gateway.

### Resource `queues`:

- `retrieve_queues` (`read`): Retrieve an existing call queue

### Resource `queues.calls`:

- `retrieve_queues_calls` (`read`): Retrieve an existing call from an existing queue
- `update_queues_calls` (`write`): Update queued call's keep_after_hangup flag
- `list_queues_calls` (`read`): Retrieve the list of calls in an existing queue
- `remove_queues_calls` (`write`): Removes an inactive call from a queue. If the call is no longer active, use this command to remove it from the queue.

### Resource `recording_transcriptions`:

- `retrieve_recording_transcriptions` (`read`): Retrieves the details of an existing recording transcription.
- `list_recording_transcriptions` (`read`): Returns a list of your recording transcriptions.
- `delete_recording_transcriptions` (`write`): Permanently deletes a recording transcription.

### Resource `recordings`:

- `retrieve_recordings` (`read`): Retrieves the details of an existing call recording.
- `list_recordings` (`read`): Returns a list of your call recordings.
- `delete_recordings` (`write`): Permanently deletes a call recording.

### Resource `recordings.actions`:

- `delete_recordings_actions` (`write`): Permanently deletes a list of call recordings.

### Resource `regions`:

- `list_regions` (`read`): List all regions and the interfaces that region supports

### Resource `regulatory_requirements`:

- `retrieve_regulatory_requirements` (`read`): Retrieve regulatory requirements

### Resource `reports`:

- `list_mdrs_reports` (`read`): Fetch all Mdr records
- `list_wdrs_reports` (`read`): Fetch all Wdr records

### Resource `reports.cdr_usage_reports`:

- `fetch_sync_reports_cdr_usage_reports` (`read`): Generate and fetch voice usage report synchronously. This endpoint will both generate and fetch the voice report over a specified time period. No polling is necessary but the response may take up to a couple of minutes.

### Resource `reports.mdr_usage_reports`:

- `create_reports_mdr_usage_reports` (`write`): Submit request for new new messaging usage report. This endpoint will pull and aggregate messaging data in specified time period.
- `retrieve_reports_mdr_usage_reports` (`read`): Fetch a single messaging usage report by id
- `list_reports_mdr_usage_reports` (`read`): Fetch all messaging usage reports. Usage reports are aggregated messaging data for specified time period and breakdown
- `delete_reports_mdr_usage_reports` (`write`): Delete messaging usage report by id
- `fetch_sync_reports_mdr_usage_reports` (`read`): Generate and fetch messaging usage report synchronously. This endpoint will both generate and fetch the messaging report over a specified time period. No polling is necessary but the response may take up to a couple of minutes.

### Resource `requirement_groups`:

- `create_requirement_groups` (`write`): Create a new requirement group
- `retrieve_requirement_groups` (`read`): Get a single requirement group by ID
- `update_requirement_groups` (`write`): Update requirement values in requirement group
- `list_requirement_groups` (`read`): List requirement groups
- `delete_requirement_groups` (`write`): Delete a requirement group by ID
- `submit_for_approval_requirement_groups` (`write`): Submit a Requirement Group for Approval

### Resource `requirement_types`:

- `retrieve_requirement_types` (`read`): Retrieve a requirement type by id
- `list_requirement_types` (`read`): List all requirement types ordered by created_at descending

### Resource `requirements`:

- `retrieve_requirements` (`read`): Retrieve a document requirement record
- `list_requirements` (`read`): List all requirements with filtering, sorting, and pagination

### Resource `room_compositions`:

- `create_room_compositions` (`write`): Asynchronously create a room composition.
- `retrieve_room_compositions` (`read`): View a room composition.
- `list_room_compositions` (`read`): View a list of room compositions.
- `delete_room_compositions` (`write`): Synchronously delete a room composition.

### Resource `room_participants`:

- `retrieve_room_participants` (`read`): View a room participant.
- `list_room_participants` (`read`): View a list of room participants.

### Resource `room_recordings`:

- `retrieve_room_recordings` (`read`): View a room recording.
- `list_room_recordings` (`read`): View a list of room recordings.
- `delete_room_recordings` (`write`): Synchronously delete a Room Recording.
- `delete_bulk_room_recordings` (`write`): Delete several room recordings in a bulk.

### Resource `rooms`:

- `create_rooms` (`write`): Synchronously create a Room.
- `retrieve_rooms` (`read`): View a room.
- `update_rooms` (`write`): Synchronously update a Room.
- `list_rooms` (`read`): View a list of rooms.
- `delete_rooms` (`write`): Synchronously delete a Room. Participants from that room will be kicked out, they won't be able to join that room anymore, and you won't be charged anymore for that room.

### Resource `rooms.actions`:

- `generate_join_client_token_rooms_actions` (`write`): Synchronously create an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`, a Refresh Token is also provided to refresh a Client Token, the Refresh Token expires after `refresh_token_ttl_secs`.
- `refresh_client_token_rooms_actions` (`write`): Synchronously refresh an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`.

### Resource `rooms.sessions`:

- `retrieve_rooms_sessions` (`read`): View a room session.
- `list_0_rooms_sessions` (`read`): View a list of room sessions.
- `list_1_rooms_sessions` (`read`): View a list of room sessions.
- `retrieve_participants_rooms_sessions` (`read`): View a list of room participants.

### Resource `rooms.sessions.actions`:

- `end_sessions_rooms_actions` (`write`): Note: this will also kick all participants currently present in the room
- `kick_sessions_rooms_actions` (`write`): Kick participants from a room session.
- `mute_sessions_rooms_actions` (`write`): Mute participants in room session.
- `unmute_sessions_rooms_actions` (`write`): Unmute participants in room session.

### Resource `seti`:

- `retrieve_black_box_test_results_seti` (`read`): Returns the results of the various black box tests

### Resource `short_codes`:

- `retrieve_short_codes` (`read`): Retrieve a short code
- `update_short_codes` (`write`): Update the settings for a specific short code. To unbind a short code from a profile, set the `messaging_profile_id` to `null` or an empty string.
- `list_short_codes` (`read`): List short codes

### Resource `sim_card_data_usage_notifications`:

- `create_sim_card_data_usage_notifications` (`write`): Creates a new SIM card data usage notification.
- `retrieve_sim_card_data_usage_notifications` (`read`): Get a single SIM Card Data Usage Notification.
- `update_sim_card_data_usage_notifications` (`write`): Updates information for a SIM Card Data Usage Notification.
- `list_sim_card_data_usage_notifications` (`read`): Lists a paginated collection of SIM card data usage notifications. It enables exploring the collection using specific filters.
- `delete_sim_card_data_usage_notifications` (`write`): Delete the SIM Card Data Usage Notification.

### Resource `sim_card_groups`:

- `create_sim_card_groups` (`write`): Creates a new SIM card group object
- `retrieve_sim_card_groups` (`read`): Returns the details regarding a specific SIM card group
- `update_sim_card_groups` (`write`): Updates a SIM card group
- `list_sim_card_groups` (`read`): Get all SIM card groups belonging to the user that match the given filters.
- `delete_sim_card_groups` (`write`): Permanently deletes a SIM card group

### Resource `sim_card_groups.actions`:

- `retrieve_sim_card_groups_actions` (`read`): This API allows fetching detailed information about a SIM card group action resource to make follow-ups in an existing asynchronous operation.
- `list_sim_card_groups_actions` (`read`): This API allows listing a paginated collection a SIM card group actions. It allows to explore a collection of existing asynchronous operation using specific filters.
- `remove_private_wireless_gateway_sim_card_groups_actions` (`write`): This action will asynchronously remove an existing Private Wireless Gateway definition from a SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic handled by Telnyx's default mobile network configuration.
- `remove_wireless_blocklist_sim_card_groups_actions` (`write`): This action will asynchronously remove an existing Wireless Blocklist to all the SIMs in the SIM card group.
- `set_private_wireless_gateway_sim_card_groups_actions` (`write`): This action will asynchronously assign a provisioned Private Wireless Gateway to the SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic controlled by the associated Private Wireless Gateway. This operation will also imply that new SIM cards assigned to a group will inherit its network definitions. If it's moved to a different group that doesn't have a Private Wireless Gateway, it'll use Telnyx's default mobile network configuration.
- `set_wireless_blocklist_sim_card_groups_actions` (`write`): This action will asynchronously assign a Wireless Blocklist to all the SIMs in the SIM card group.

### Resource `sim_card_order_preview`:

- `preview_sim_card_order_preview` (`write`): Preview SIM card order purchases.

### Resource `sim_card_orders`:

- `create_sim_card_orders` (`write`): Creates a new order for SIM cards.
- `retrieve_sim_card_orders` (`read`): Get a single SIM card order by its ID.
- `list_sim_card_orders` (`read`): Get all SIM card orders according to filters.

### Resource `sim_cards`:

- `retrieve_sim_cards` (`read`): Returns the details regarding a specific SIM card.
- `update_sim_cards` (`write`): Updates SIM card data
- `list_sim_cards` (`read`): Get all SIM cards belonging to the user that match the given filters.
- `delete_sim_cards` (`write`): The SIM card will be decommissioned, removed from your account and you will stop being charged.<br />The SIM card won't be able to connect to the network after the deletion is completed, thus making it impossible to consume data.<br/>
  Transitioning to the disabled state may take a period of time.
  Until the transition is completed, the SIM card status will be disabling <code>disabling</code>.<br />In order to re-enable the SIM card, you will need to re-register it.
- `get_activation_code_sim_cards` (`read`): It returns the activation code for an eSIM.<br/><br/>
  This API is only available for eSIMs. If the given SIM is a physical SIM card, or has already been installed, an error will be returned.
- `get_device_details_sim_cards` (`read`): It returns the device details where a SIM card is currently being used.
- `get_public_ip_sim_cards` (`read`): It returns the public IP requested for a SIM card.
- `list_wireless_connectivity_logs_sim_cards` (`read`): This API allows listing a paginated collection of Wireless Connectivity Logs associated with a SIM Card, for troubleshooting purposes.

### Resource `sim_cards.actions`:

- `retrieve_sim_cards_actions` (`read`): This API fetches detailed information about a SIM card action to follow-up on an existing asynchronous operation.
- `list_sim_cards_actions` (`read`): This API lists a paginated collection of SIM card actions. It enables exploring a collection of existing asynchronous operations using specific filters.
- `bulk_set_public_ips_sim_cards_actions` (`write`): This API triggers an asynchronous operation to set a public IP for each of the specified SIM cards.<br/>
  For each SIM Card a SIM Card Action will be generated. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/api/wireless/list-sim-card-actions) API.
- `disable_sim_cards_actions` (`write`): This API disables a SIM card, disconnecting it from the network and making it impossible to consume data.<br/>
  The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the disabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/api/wireless/list-sim-card-actions) API.
- `enable_sim_cards_actions` (`write`): This API enables a SIM card, connecting it to the network and making it possible to consume data.<br/>
  To enable a SIM card, it must be associated with a SIM card group.<br/>
  The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the enabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/api/wireless/list-sim-card-actions) API.
- `remove_public_ip_sim_cards_actions` (`write`): This API removes an existing public IP from a SIM card. <br/><br/>
  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/api/wireless/list-sim-card-actions) API.
- `set_public_ip_sim_cards_actions` (`write`): This API makes a SIM card reachable on the public internet by mapping a random public IP to the SIM card. <br/><br/>
  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/api/wireless/list-sim-card-actions) API. <br/><br/>
  Setting a Public IP to a SIM Card incurs a charge and will only succeed if the account has sufficient funds.
- `set_standby_sim_cards_actions` (`write`): The SIM card will be able to connect to the network once the process to set it to standby has been completed, thus making it possible to consume data.<br/>
  To set a SIM card to standby, it must be associated with SIM card group.<br/>
  The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the standby state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/api/wireless/list-sim-card-actions) API.
- `validate_registration_codes_sim_cards_actions` (`write`): It validates whether SIM card registration codes are valid or not.

### Resource `siprec_connectors`:

- `create_siprec_connectors` (`write`): Creates a new SIPREC connector configuration.
- `retrieve_siprec_connectors` (`read`): Returns details of a stored SIPREC connector.
- `update_siprec_connectors` (`write`): Updates a stored SIPREC connector configuration.
- `delete_siprec_connectors` (`write`): Deletes a stored SIPREC connector.

### Resource `storage`:

- `list_migration_source_coverage_storage` (`read`): List Migration Source coverage

### Resource `storage.buckets`:

- `create_presigned_url_storage_buckets` (`write`): Returns a timed and authenticated URL to get an object. This is the equivalent to AWS S3’s “presigned” URL. Please note that Telnyx performs authentication differently from AWS S3 and you MUST NOT use the presign method of AWS s3api CLI or sdk to generate the presigned URL.

  Refer to: https://developers.telnyx.com/docs/cloud-storage/presigned-urls

### Resource `storage.buckets.ssl_certificate`:

- `create_buckets_storage_ssl_certificate` (`write`): Uploads an SSL certificate and its matching secret so that you can use Telnyx’s storage as your CDN.
- `retrieve_buckets_storage_ssl_certificate` (`read`): Returns the stored certificate detail of a bucket, if applicable.
- `delete_buckets_storage_ssl_certificate` (`write`): Deletes an SSL certificate and its matching secret.

### Resource `storage.buckets.usage`:

- `get_api_usage_buckets_storage_usage` (`read`): Returns the detail on API usage on a bucket of a particular time period, group by method category.
- `get_bucket_usage_buckets_storage_usage` (`read`): Returns the amount of storage space and number of files a bucket takes up.

### Resource `storage.migration_sources`:

- `create_storage_migration_sources` (`write`): Create a source from which data can be migrated from.
- `retrieve_storage_migration_sources` (`read`): Get a Migration Source
- `list_storage_migration_sources` (`read`): List all Migration Sources
- `delete_storage_migration_sources` (`write`): Delete a Migration Source

### Resource `storage.migrations`:

- `create_storage_migrations` (`write`): Initiate a migration of data from an external provider into Telnyx Cloud Storage. Currently, only S3 is supported.
- `retrieve_storage_migrations` (`read`): Get a Migration
- `list_storage_migrations` (`read`): List all Migrations

### Resource `storage.migrations.actions`:

- `stop_migrations_storage_actions` (`write`): Stop a Migration

### Resource `sub_number_orders`:

- `retrieve_sub_number_orders` (`read`): Get an existing sub number order.
- `update_sub_number_orders` (`write`): Updates a sub number order.
- `list_sub_number_orders` (`read`): Get a paginated list of sub number orders.
- `cancel_sub_number_orders` (`write`): Allows you to cancel a sub number order in 'pending' status.
- `update_requirement_group_sub_number_orders` (`write`): Update requirement group for a sub number order

### Resource `sub_number_orders_report`:

- `create_sub_number_orders_report` (`write`): Create a CSV report for sub number orders. The report will be generated asynchronously and can be downloaded once complete.
- `retrieve_sub_number_orders_report` (`read`): Get the status and details of a sub number orders report.
- `download_sub_number_orders_report` (`read`): Download the CSV file for a completed sub number orders report. The report status must be 'success' before the file can be downloaded.

### Resource `telephony_credentials`:

- `create_telephony_credentials` (`write`): Create a credential.
- `retrieve_telephony_credentials` (`read`): Get the details of an existing On-demand Credential.
- `update_telephony_credentials` (`write`): Update an existing credential.
- `list_telephony_credentials` (`read`): List all On-demand Credentials.
- `delete_telephony_credentials` (`write`): Delete an existing credential.
- `create_token_telephony_credentials` (`write`): Create an Access Token (JWT) for the credential.

### Resource `texml`:

- `secrets_texml` (`write`): Create a TeXML secret which can be later used as a Dynamic Parameter for TeXML when using Mustache Templates in your TeXML. In your TeXML you will be able to use your secret name, and this name will be replaced by the actual secret value when processing the TeXML on Telnyx side. The secrets are not visible in any logs.

### Resource `texml.accounts`:

- `retrieve_recordings_json_texml_accounts` (`read`): Returns multiple recording resources for an account.
- `retrieve_transcriptions_json_texml_accounts` (`read`): Returns multiple recording transcription resources for an account.

### Resource `texml.accounts.calls`:

- `retrieve_accounts_texml_calls` (`read`): Returns an individual call identified by its CallSid. This endpoint is eventually consistent.
- `update_accounts_texml_calls` (`write`): Update TeXML call. Please note that the keys present in the payload MUST BE formatted in CamelCase as specified in the example.
- `calls_accounts_texml_calls` (`write`): Initiate an outbound TeXML call. Telnyx will request TeXML from the XML Request URL configured for the connection in the Mission Control Portal.
- `retrieve_calls_accounts_texml_calls` (`read`): Returns multiple call resouces for an account. This endpoint is eventually consistent.
- `siprec_json_accounts_texml_calls` (`write`): Starts siprec session with specified parameters for call idientified by call_sid.
- `streams_json_accounts_texml_calls` (`write`): Starts streaming media from a call to a specific WebSocket address.

### Resource `texml.accounts.calls.recordings_json`:

- `recordings_json_calls_accounts_texml_recordings_json` (`write`): Starts recording with specified parameters for call idientified by call_sid.
- `retrieve_recordings_json_calls_accounts_texml_recordings_json` (`read`): Returns recordings for a call identified by call_sid.

### Resource `texml.accounts.calls.recordings`:

- `recording_sid_json_calls_accounts_texml_recordings` (`write`): Updates recording resource for particular call.

### Resource `texml.accounts.calls.siprec`:

- `siprec_sid_json_calls_accounts_texml_siprec` (`write`): Updates siprec session identified by siprec_sid.

### Resource `texml.accounts.calls.streams`:

- `streaming_sid_json_calls_accounts_texml_streams` (`write`): Updates streaming resource for particular call.

### Resource `texml.accounts.conferences`:

- `retrieve_accounts_texml_conferences` (`read`): Returns a conference resource.
- `update_accounts_texml_conferences` (`write`): Updates a conference resource.
- `retrieve_conferences_accounts_texml_conferences` (`read`): Lists conference resources.
- `retrieve_recordings_accounts_texml_conferences` (`read`): Lists conference recordings
- `retrieve_recordings_json_accounts_texml_conferences` (`read`): Returns recordings for a conference identified by conference_sid.

### Resource `texml.accounts.conferences.participants`:

- `retrieve_conferences_accounts_texml_participants` (`read`): Gets conference participant resource
- `update_conferences_accounts_texml_participants` (`write`): Updates a conference participant
- `delete_conferences_accounts_texml_participants` (`write`): Deletes a conference participant
- `participants_conferences_accounts_texml_participants` (`write`): Dials a new conference participant
- `retrieve_participants_conferences_accounts_texml_participants` (`read`): Lists conference participants

### Resource `texml.accounts.recordings.json`:

- `delete_recording_sid_json_recordings_accounts_texml_json` (`write`): Deletes recording resource identified by recording id.
- `retrieve_recording_sid_json_recordings_accounts_texml_json` (`read`): Returns recording resource identified by recording id.

### Resource `texml.accounts.transcriptions.json`:

- `delete_recording_transcription_sid_json_transcriptions_accounts_texml_json` (`write`): Permanently deletes a recording transcription.
- `retrieve_recording_transcription_sid_json_transcriptions_accounts_texml_json` (`read`): Returns the recording transcription resource identified by its ID.

### Resource `texml.calls`:

- `update_texml_calls` (`write`): Update TeXML call. Please note that the keys present in the payload MUST BE formatted in CamelCase as specified in the example.
- `initiate_texml_calls` (`write`): Initiate an outbound TeXML call. Telnyx will request TeXML from the XML Request URL configured for the connection in the Mission Control Portal.

### Resource `texml_applications`:

- `create_texml_applications` (`write`): Creates a TeXML Application.
- `retrieve_texml_applications` (`read`): Retrieves the details of an existing TeXML Application.
- `update_texml_applications` (`write`): Updates settings of an existing TeXML Application.
- `list_texml_applications` (`read`): Returns a list of your TeXML Applications.
- `delete_texml_applications` (`write`): Deletes a TeXML Application.

### Resource `text_to_speech`:

- `generate_speech_text_to_speech` (`write`): Converts the provided text to speech using the specified voice and returns audio data
- `list_voices_text_to_speech` (`read`): Returns a list of voices that can be used with the text to speech commands.

### Resource `usage_reports`:

- `list_usage_reports` (`read`): Get Telnyx usage data by product, broken out by the specified dimensions
- `get_options_usage_reports` (`read`): Get the Usage Reports options for querying usage, including the products available and their respective metrics and dimensions

### Resource `user_addresses`:

- `create_user_addresses` (`write`): Creates a user address.
- `retrieve_user_addresses` (`read`): Retrieves the details of an existing user address.
- `list_user_addresses` (`read`): Returns a list of your user addresses.

### Resource `user_tags`:

- `list_user_tags` (`read`): List all user tags.

### Resource `verifications`:

- `retrieve_verifications` (`read`): Retrieve verification
- `trigger_call_verifications` (`write`): Trigger Call verification
- `trigger_flashcall_verifications` (`write`): Trigger Flash call verification
- `trigger_sms_verifications` (`write`): Trigger SMS verification

### Resource `verifications.by_phone_number`:

- `list_verifications_by_phone_number` (`read`): List verifications by phone number

### Resource `verifications.by_phone_number.actions`:

- `verify_by_phone_number_verifications_actions` (`write`): Verify verification code by phone number

### Resource `verifications.actions`:

- `verify_verifications_actions` (`write`): Verify verification code by ID

### Resource `verified_numbers`:

- `create_verified_numbers` (`write`): Initiates phone number verification procedure. Supports DTMF extension dialing for voice calls to numbers behind IVR systems.
- `retrieve_verified_numbers` (`read`): Retrieve a verified number
- `list_verified_numbers` (`read`): Gets a paginated list of Verified Numbers.
- `delete_verified_numbers` (`write`): Delete a verified number

### Resource `verified_numbers.actions`:

- `submit_verification_code_verified_numbers_actions` (`write`): Submit verification code

### Resource `verify_profiles`:

- `create_verify_profiles` (`write`): Creates a new Verify profile to associate verifications with.
- `retrieve_verify_profiles` (`read`): Gets a single Verify profile.
- `update_verify_profiles` (`write`): Update Verify profile
- `list_verify_profiles` (`read`): Gets a paginated list of Verify profiles.
- `delete_verify_profiles` (`write`): Delete Verify profile
- `create_template_verify_profiles` (`write`): Create a new Verify profile message template.
- `retrieve_templates_verify_profiles` (`read`): List all Verify profile message templates.
- `update_template_verify_profiles` (`write`): Update an existing Verify profile message template.

### Resource `virtual_cross_connects`:

- `create_virtual_cross_connects` (`write`): Create a new Virtual Cross Connect.<br /><br />For AWS and GCE, you have the option of creating the primary connection first and the secondary connection later. You also have the option of disabling the primary and/or secondary connections at any time and later re-enabling them. With Azure, you do not have this option. Azure requires both the primary and secondary connections to be created at the same time and they can not be independantly disabled.
- `retrieve_virtual_cross_connects` (`read`): Retrieve a Virtual Cross Connect.
- `update_virtual_cross_connects` (`write`): Update the Virtual Cross Connect.<br /><br />Cloud IPs can only be patched during the `created` state, as GCE will only inform you of your generated IP once the pending connection requested has been accepted. Once the Virtual Cross Connect has moved to `provisioning`, the IPs can no longer be patched.<br /><br />Once the Virtual Cross Connect has moved to `provisioned` and you are ready to enable routing, you can toggle the routing announcements to `true`.
- `list_virtual_cross_connects` (`read`): List all Virtual Cross Connects.
- `delete_virtual_cross_connects` (`write`): Delete a Virtual Cross Connect.

### Resource `virtual_cross_connects_coverage`:

- `list_virtual_cross_connects_coverage` (`read`): List Virtual Cross Connects Cloud Coverage.<br /><br />This endpoint shows which cloud regions are available for the `location_code` your Virtual Cross Connect will be provisioned in.

### Resource `webhook_deliveries`:

- `retrieve_webhook_deliveries` (`read`): Provides webhook_delivery debug data, such as timestamps, delivery status and attempts.
- `list_webhook_deliveries` (`read`): Lists webhook_deliveries for the authenticated user

### Resource `wireguard_interfaces`:

- `create_wireguard_interfaces` (`write`): Create a new WireGuard Interface. Current limitation of 10 interfaces per user can be created.
- `retrieve_wireguard_interfaces` (`read`): Retrieve a WireGuard Interfaces.
- `list_wireguard_interfaces` (`read`): List all WireGuard Interfaces.
- `delete_wireguard_interfaces` (`write`): Delete a WireGuard Interface.

### Resource `wireguard_peers`:

- `create_wireguard_peers` (`write`): Create a new WireGuard Peer. Current limitation of 5 peers per interface can be created.
- `retrieve_wireguard_peers` (`read`): Retrieve the WireGuard peer.
- `update_wireguard_peers` (`write`): Update the WireGuard peer.
- `list_wireguard_peers` (`read`): List all WireGuard peers.
- `delete_wireguard_peers` (`write`): Delete the WireGuard peer.
- `retrieve_config_wireguard_peers` (`read`): Retrieve Wireguard config template for Peer

### Resource `wireless`:

- `retrieve_regions_wireless` (`read`): Retrieve all wireless regions for the given product.

### Resource `wireless.detail_records_reports`:

- `create_wireless_detail_records_reports` (`write`): Asynchronously create a report containing Wireless Detail Records (WDRs) for the SIM cards that consumed wireless data in the given time period.
- `retrieve_wireless_detail_records_reports` (`read`): Returns one specific WDR report
- `list_wireless_detail_records_reports` (`read`): Returns the WDR Reports that match the given parameters.
- `delete_wireless_detail_records_reports` (`write`): Deletes one specific WDR report.

### Resource `wireless_blocklist_values`:

- `list_wireless_blocklist_values` (`read`): Retrieve all wireless blocklist values for a given blocklist type.

### Resource `wireless_blocklists`:

- `create_wireless_blocklists` (`write`): Create a Wireless Blocklist to prevent SIMs from connecting to certain networks.
- `retrieve_wireless_blocklists` (`read`): Retrieve information about a Wireless Blocklist.
- `update_wireless_blocklists` (`write`): Update a Wireless Blocklist.
- `list_wireless_blocklists` (`read`): Get all Wireless Blocklists belonging to the user.
- `delete_wireless_blocklists` (`write`): Deletes the Wireless Blocklist.

### Resource `partner_campaigns`:

- `retrieve_partner_campaigns` (`read`): Retrieve campaign details by `campaignId`.
- `update_partner_campaigns` (`write`): Update campaign details by `campaignId`. **Please note:** Only webhook urls are editable.
- `list_partner_campaigns` (`read`): Retrieve all partner campaigns you have shared to Telnyx in a paginated fashion.

  This endpoint is currently limited to only returning shared campaigns that Telnyx has accepted. In other words, shared but pending campaigns are currently omitted from the response from this endpoint.

- `list_shared_by_me_partner_campaigns` (`read`): Get all partner campaigns you have shared to Telnyx in a paginated fashion

  This endpoint is currently limited to only returning shared campaigns that Telnyx
  has accepted. In other words, shared but pending campaigns are currently omitted
  from the response from this endpoint.

- `retrieve_sharing_status_partner_campaigns` (`read`): Get Sharing Status

### Resource `well_known`:

- `retrieve_authorization_server_metadata_well_known` (`read`): OAuth 2.0 Authorization Server Metadata (RFC 8414)
- `retrieve_protected_resource_metadata_well_known` (`read`): OAuth 2.0 Protected Resource Metadata for resource discovery
