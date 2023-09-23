import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState } from './customer.state';

export const CUSTOMER_STATE_NAME = 'customer';

const state = createFeatureSelector<CustomerState>(CUSTOMER_STATE_NAME);

export const page = createSelector(state, (state) => state.page);
export const staffs = createSelector(
  state,
  (state) => state.page?.content || []
);
export const pageSize = createSelector(state, (state) => state.page?.size || 0);
export const totalElements = createSelector(
  state,
  (state) => state.page?.totalElements || 0
);
export const loading = createSelector(state, (state) => state.loading);
