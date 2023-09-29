import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './confirmation.action';
import {
  ConfirmationState,
  ConfirmationStatus,
  initialState,
} from './confirmation.state';

const _reducer = createReducer(
  initialState,
  on(Actions.confirmation_request, (state) => ({
    ...state,
    loading: true,
  })),
  on(Actions.confirmation_success, (state) => ({
    ...state,
    loading: false,
    status: ConfirmationStatus.success,
    error: null,
  })),
  on(Actions.confirmation_fail, (state, { error }) => ({
    ...state,
    status: ConfirmationStatus.error,
    loading: false,
    failure: error,
  })),
  on(Actions.confirmation_reset, (_) => ({ ...initialState }))
);

export function confirmationReducer(
  state: ConfirmationState | undefined,
  action: Action
) {
  return _reducer(state, action);
}
