import { ActionReducerMap } from '@ngrx/store';
import {
  CONFIRMATION_STATE_NAME,
  ConfirmationEffects,
  ConfirmationState,
  confirmationReducer,
} from './confirmation';
import {
  DropdownState,
  dropdownReducer,
  DROPDOWN_STATE_NAME,
  DropdownEffects,
} from './dropdown';

export interface AppState {
  [CONFIRMATION_STATE_NAME]: ConfirmationState;
  [DROPDOWN_STATE_NAME]: DropdownState;
}

export const appReducer: ActionReducerMap<AppState> = {
  [CONFIRMATION_STATE_NAME]: confirmationReducer,
  [DROPDOWN_STATE_NAME]: dropdownReducer,
};

export const effects = [ConfirmationEffects, DropdownEffects];
