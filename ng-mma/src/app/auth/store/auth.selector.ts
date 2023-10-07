import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.state';

export const AUTH_STATE_NAME = 'auth';

const confirmationState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const auth_user = createSelector(
  confirmationState,
  (state) => state.user
);
export const auth_loading = createSelector(
  confirmationState,
  (state) => state.loading
);
export const refresh = createSelector(
  confirmationState,
  (state) => state.refresh
);
export const auth_error = createSelector(
  confirmationState,
  (state) => state.error
);
