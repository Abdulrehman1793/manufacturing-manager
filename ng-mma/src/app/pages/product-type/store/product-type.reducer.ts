import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './product-type.action';
import {
  ProductTypeContentState,
  initialContentState,
} from './product-type.state';

const _reducer = createReducer(
  initialContentState,
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
  on(Actions.findPageFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      failure: error,
    };
  })
);

export function reducer(
  state: ProductTypeContentState | undefined,
  action: Action
) {
  return _reducer(state, action);
}
