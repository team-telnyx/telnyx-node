import TelnyxResource from '../TelnyxResource';
import {ActionsSimCards} from './ActionsSimCards';
export const Actions = TelnyxResource.extend({
  path: 'actions',

  nestedResources: {
    SimCards: ActionsSimCards,
  },
});
