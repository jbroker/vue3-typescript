import UserSettings from './user-settings';

export default interface User extends Object {
  group: string,
  name: string,
  impersonationName: string,
  features: Array<string>,
  isImpersonation: boolean,
  roles: Array<object>,
  currentId: string,
  userSettings: UserSettings
}
