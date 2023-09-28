import { ActionReducerMap } from '@ngrx/store';
import {
  CONFIRMATION_STATE_NAME,
  ConfirmationState,
  confirmationReducer,
} from './confirmation';

export interface AppState {
  [CONFIRMATION_STATE_NAME]: ConfirmationState;
}

export const appReducer: ActionReducerMap<AppState> = {
  [CONFIRMATION_STATE_NAME]: confirmationReducer,
};
