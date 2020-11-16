import $ from 'jquery';
import 'signalr';

//import store

export default class SignalRService {
  hubProxies: Array<SignalR.Hub.Proxy>;
  hubConnection: SignalR.Hub.Connection;

  constructor({ url = '', options = { logging: false } } = {}) {
    if (!url) throw new Error('A SignalR URL must be provided to SignalRService');

    this.hubProxies = [];
    this.hubConnection = $.hubConnection(url, { logging: options.logging })
  }

  useHubProxy(name: string) {
    let targetHub = this.hubProxies.find(x => x.hubName === name);
    if (!targetHub) {
      targetHub = this.hubConnection.createHubProxy(name);
      this.hubProxies.push(targetHub);
    }
    return targetHub;
  }
  // base hub interface with all hub names and methods on that hub?
  async fnInvoke(hubName:string, hubMethod: string, payload: any) {
    if (!this.hubProxies.some(x => x.hubName === hubName)) throw new Error(`You must include a valid <hubName> option. Are you sure you've registered "${hubName}" properly?`);
    return payload
      ? this.hubProxies.find(y => y.hubName === hubName)?.invoke(hubMethod, payload)
      : this.hubProxies.find(y => y.hubName === hubName)?.invoke(hubMethod)
  }
}
