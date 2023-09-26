import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductTypeState } from './product-type.state';

export const PRODUCT_TYPE_STATE_NAME = 'product-type';

export const PRODUCT_TYPE_CONTENT_STATE_NAME = 'content';
export const PRODUCT_TYPE_FORM_STATE_NAME = 'form';

const state = createFeatureSelector<ProductTypeState>(PRODUCT_TYPE_STATE_NAME);

export const content = createSelector(state, (state) => state.content);

export const page = createSelector(content, (state) => state.page);
export const purchaseUnits = createSelector(
  content,
  (state) => state.page?.content || []
);
export const pageSize = createSelector(
  content,
  (state) => state.page?.size || 0
);
export const totalElements = createSelector(
  content,
  (state) => state.page?.totalElements || 0
);
export const loading = createSelector(content, (state) => state.loading);
