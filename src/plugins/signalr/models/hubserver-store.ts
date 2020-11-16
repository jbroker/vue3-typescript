import ConnectionState from './connection-state'

export default interface HubServer extends Object {
  versionConflict: boolean,
  showSnackbar: boolean,
  connectionSlow: boolean,
  reconnecting: boolean,
  disconnected: boolean,
  connectionState: ConnectionState
  connectionStateHistory: Array<ConnectionState>,
}
