import User from '../models/user';

export default interface Auth extends Object {
  accessToken: string | null,
  expiresAt: string | null,
  idToken: string | null,
  error: string | null,
  user: User | null
}
