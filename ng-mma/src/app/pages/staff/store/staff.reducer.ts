import { Action, createReducer, on } from '@ngrx/store';

import * as UOMActions from './staff.action';
import { StaffContentState, initialStaffContentState } from './staff.state';

const _staffReducer = createReducer(
  initialStaffContentState,
  on(UOMActions.findPage, (state) => ({
    ...state,
    loading: true,
  })),
  on(UOMActions.findPageSuccess, (state, { page }) => {
    return {
      ...state,
      page,
      loading: false,
    };
  }),
  on(UOMActions.findAPageFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      failure: error,
    };
  })
);

export function staffReducer(
  state: StaffContentState | undefined,
  action: Action
) {
  return _staffReducer(state, action);
}
