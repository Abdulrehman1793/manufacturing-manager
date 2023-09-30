import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './product-type.action';
import {
  ProductTypeContentState,
  initialContentState,
} from './product-type.state';
import { Search } from 'src/app/core/models';

const _reducer = createReducer(
  initialContentState,
  on(Actions.findPage, (state) => ({
    ...state,
    loading: true,
  })),
  on(Actions.findPageSuccess, (state, { page }) => {
    const sort: any = page.sort;

    let search: Search = {
      action: 'page',
      page: page.page,
      sort: sort[0].property,
      pageSize: page.size,
      direction: sort[0].direction,
    };
    console.log('Reducer....', page);

    return {
      ...state,
      page,
      search,
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
