// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create and retrieve asynchronous summaries and action-item artifacts.
 */
export class Artifacts extends APIResource {
  /**
   * Returns a list of artifacts for a meeting session.
   *
   * @example
   * ```ts
   * const artifacts =
   *   await client.meetingSessions.artifacts.list(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<ArtifactListResponse> {
    return this._client.get(path`/meeting_sessions/${id}/artifacts`, options);
  }

  /**
   * Requests asynchronous generation of one artifact: `summary`, `action_items`,
   * `decisions`, `topics`, `open_questions`, or `custom`. Each request produces one
   * artifact. `custom` is answered from a `prompt` you supply, which is required for
   * `custom` and rejected on the five named types. Generation requires transcript
   * content and configured inference and currently reads at most the first 10,000
   * segments, so exceptionally long transcripts may produce incomplete artifacts or
   * fail model limits. **Not idempotent, and every call is billed**: each request is
   * a separate inference run, so a retry or a duplicate POST produces a second
   * artifact and a second charge. Guard the call rather than relying on the service
   * to collapse it. The automatic `summarize_on_end` attempt is billed on the same
   * basis.
   *
   * @example
   * ```ts
   * const meetingSessionArtifactResponse =
   *   await client.meetingSessions.artifacts.create(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *     { type: 'summary' },
   *   );
   * ```
   */
  create(
    id: string,
    body: ArtifactCreateParams,
    options?: RequestOptions,
  ): APIPromise<MeetingSessionArtifactResponse> {
    return this._client.post(path`/meeting_sessions/${id}/artifacts`, { body, ...options });
  }

  /**
   * Retrieves a single meeting session artifact by ID.
   *
   * @example
   * ```ts
   * const meetingSessionArtifactResponse =
   *   await client.meetingSessions.artifacts.retrieve(
   *     'mtgart_b2c3d4e5-f6a7-8901-bcde-f23456789012',
   *     { id: 'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890' },
   *   );
   * ```
   */
  retrieve(
    artifactID: string,
    params: ArtifactRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MeetingSessionArtifactResponse> {
    const { id } = params;
    return this._client.get(path`/meeting_sessions/${id}/artifacts/${artifactID}`, options);
  }
}

export interface MeetingSessionArtifact {
  id: string;

  content: MeetingSessionArtifact.Content | null;

  created_at: string;

  failure_reason: string | null;

  model_provenance: MeetingSessionArtifact.ModelProvenance | null;

  /**
   * The prompt that produced this artifact, or null for a named type. Non-null only
   * when `type` is `custom`; the five named types always return `null`.
   */
  prompt: string | null;

  session_id: string;

  status: 'pending' | 'completed' | 'failed';

  type: 'summary' | 'action_items' | 'decisions' | 'topics' | 'open_questions' | 'custom';

  updated_at: string;
}

export namespace MeetingSessionArtifact {
  export interface Content {
    text: string;
  }

  export interface ModelProvenance {
    model: string;

    provider: string;
  }
}

export interface MeetingSessionArtifactResponse {
  data: MeetingSessionArtifact;
}

export interface ArtifactListResponse {
  data: Array<MeetingSessionArtifact>;
}

export type ArtifactCreateParams = ArtifactCreateParams.NamedArtifact | ArtifactCreateParams.CustomArtifact;

export declare namespace ArtifactCreateParams {
  export interface NamedArtifact {
    /**
     * What to generate from the transcript. `custom` is answered from a `prompt` you
     * supply; the five named types need none.
     */
    type: 'summary' | 'action_items' | 'decisions' | 'topics' | 'open_questions';
  }

  export interface CustomArtifact {
    /**
     * An open-ended request answered from the transcript. Required when `type` is
     * `custom`, and rejected with 400 on any named type. Trimmed before storage and
     * echoed back in artifact responses and the `artifact.completed` webhook.
     */
    prompt: string;

    /**
     * Answered from the `prompt` below rather than a fixed question.
     */
    type: 'custom';
  }
}

export interface ArtifactRetrieveParams {
  /**
   * Unique identifier for the meeting session.
   */
  id: string;
}

export declare namespace Artifacts {
  export {
    type MeetingSessionArtifact as MeetingSessionArtifact,
    type MeetingSessionArtifactResponse as MeetingSessionArtifactResponse,
    type ArtifactListResponse as ArtifactListResponse,
    type ArtifactCreateParams as ArtifactCreateParams,
    type ArtifactRetrieveParams as ArtifactRetrieveParams,
  };
}
