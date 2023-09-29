import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConfirmationState } from './confirmation.state';

export const CONFIRMATION_STATE_NAME = 'confirmation';

const confirmationState = createFeatureSelector<ConfirmationState>(
  CONFIRMATION_STATE_NAME
);

export const confirmation_status = createSelector(
  confirmationState,
  (state) => state.status
);
export const confirmation_loading = createSelector(
  confirmationState,
  (state) => state.loading
);
