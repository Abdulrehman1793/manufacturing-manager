import { Action, createReducer, on } from '@ngrx/store';

import * as UOMActions from './customer.action';
import { CustomerState, initialCustomerState } from './customer.state';

const _customerSReducer = createReducer(
  initialCustomerState,
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

export function customerReducer(state: CustomerState | undefined, action: Action) {
  return _customerSReducer(state, action);
}
