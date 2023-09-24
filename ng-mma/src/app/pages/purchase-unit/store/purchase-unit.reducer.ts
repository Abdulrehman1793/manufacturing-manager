import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './purchase-unit.action';
import {
  PurchaseUnitContentState,
  initialPurchaseUnitContentState,
} from './purchase-unit.state';

const _reducer = createReducer(
  initialPurchaseUnitContentState,
  on(Actions.findPage, (state) => ({
    ...state,
    loading: true,
  })),
  on(Actions.findPageSuccess, (state, { page }) => {
    return {
      ...state,
      page,
      loading: false,
    };
  }),
  on(Actions.findAPageFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      failure: error,
    };
  })
);

export function reducer(
  state: PurchaseUnitContentState | undefined,
  action: Action
) {
  return _reducer(state, action);
}
