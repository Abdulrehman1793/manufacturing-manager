import { Action, createReducer, on } from '@ngrx/store';

import * as UOMActions from './uom.action';
import { UOMState, initialUOMState } from './uom.state';

const _uomReducer = createReducer(
  initialUOMState,
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

export function uomReducer(state: UOMState | undefined, action: Action) {
  return _uomReducer(state, action);
}
