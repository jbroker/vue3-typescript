import { Store } from '@/store';
import HubServer from './models/hubserver-store';

class HubServerStore extends Store<HubServer> {
  protected data(): HubServer {
    return {
      versionConflict: false,
      showSnackbar: false,
      connectionSlow: false,
      reconnecting: false,
      disconnected: false,
      connectionState: {
        oldState: '',
        newState: '',
        time: ''
      },
      connectionStateHistory: []
    }
  }





}

export const hubserverStore: HubServerStore = new HubServerStore;
