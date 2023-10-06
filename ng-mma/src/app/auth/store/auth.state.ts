import { User } from '../../core/models';

export interface AuthState {
  user: User | undefined;
  loading: boolean;
  error: string | undefined;
}

export const initialState: AuthState = {
  user: undefined,
  loading: false,
  error: undefined,
};
