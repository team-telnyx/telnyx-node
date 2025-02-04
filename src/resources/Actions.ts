import TelnyxResource from '../TelnyxResource.js';
import {ActionsSimCards} from './ActionsSimCards.js';
export const Actions = TelnyxResource.extend({
  path: 'actions',

  nestedResources: {
    SimCards: ActionsSimCards,
  },
});
