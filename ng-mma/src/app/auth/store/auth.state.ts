import { User } from '../../core/models';

export interface AuthState {
  user: User | null;
  loading: boolean;
  refresh: boolean;
  error: string | undefined;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  refresh: false,
  error: undefined,
};
