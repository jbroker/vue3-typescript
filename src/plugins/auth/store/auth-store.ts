import { Store } from '@/store';
import Auth from '../models/auth-store';

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
