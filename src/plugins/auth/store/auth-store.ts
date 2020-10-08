import { Store } from '@/store';
import User from '../models/user';

interface Auth extends Object {
  accessToken: string | null,
  expiresAt: string | null,
  idToken: string | null,
  error: string | null,
  user: User | null
}

class AuthStore extends Store<Auth> {
  protected data(): Auth {
    return {
      accessToken: null,
      expiresAt: null,
      idToken: null,
      error: null,
      user: null
    }
  }
}

export const authStore: AuthStore = new AuthStore;
