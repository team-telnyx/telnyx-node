// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CalendarAPI from './calendar';
import {
  Calendar,
  CalendarRetrieveOAuthCallbackParams,
  CalendarRetrieveOAuthCallbackResponse,
} from './calendar';

export class MeetingBot extends APIResource {
  calendar: CalendarAPI.Calendar = new CalendarAPI.Calendar(this._client);
}

MeetingBot.Calendar = Calendar;

export declare namespace MeetingBot {
  export {
    Calendar as Calendar,
    type CalendarRetrieveOAuthCallbackResponse as CalendarRetrieveOAuthCallbackResponse,
    type CalendarRetrieveOAuthCallbackParams as CalendarRetrieveOAuthCallbackParams,
  };
}
