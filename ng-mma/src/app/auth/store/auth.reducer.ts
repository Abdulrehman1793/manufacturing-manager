import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './auth.action';
import { AuthState, initialState } from './auth.state';

const _reducer = createReducer(
  initialState,
  on(Actions.auth_request, (state) => ({
    ...state,
    loading: true,
  })),
  on(Actions.auth_success, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),
  on(Actions.auth_remove, (state) => ({
    ...state,
    user: undefined,
    loading: false,
  })),
  on(Actions.auth_failure, (state, { failure }) => ({
    ...state,
    loading: false,
    failure,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _reducer(state, action);
}
