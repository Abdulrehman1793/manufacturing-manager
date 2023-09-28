import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './confirmation.action';
import { ConfirmationState, initialState } from './confirmation.state';

const _reducer = createReducer(
  initialState,
  on(Actions.confirmation_request, (state) => ({
    ...state,
    loading: true,
  })),
  on(Actions.confirmation_success, (state) => {
    return {
      ...state,
      loading: false,
      error: undefined,
    };
  }),
  on(Actions.confirmation_fail, (state, { error }) => {
    return {
      ...state,
      loading: false,
      failure: error,
    };
  })
);

export function confirmationReducer(state: ConfirmationState | undefined, action: Action) {
  return _reducer(state, action);
}
