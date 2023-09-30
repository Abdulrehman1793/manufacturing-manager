import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './dropdown.action';
import { DropdownState, initialState } from './dropdown.state';

const _reducer = createReducer(
  initialState,
  on(Actions.dropdown_request, (state) => ({
    ...state,
    loading: true,
  })),
  on(Actions.dropdown_success, (state, { data }) => {
    console.log(data);

    return {
      ...state,
      loading: false,
    };
  }),
  on(Actions.dropdown_fail, (state, { error }) => ({
    ...state,
    loading: false,
  }))
);

export function dropdownReducer(
  state: DropdownState | undefined,
  action: Action
) {
  return _reducer(state, action);
}
