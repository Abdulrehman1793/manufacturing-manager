import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DropdownState } from './dropdown.state';

export const DROPDOWN_STATE_NAME = 'dropdown';

const dropdownState = createFeatureSelector<DropdownState>(DROPDOWN_STATE_NAME);

export const PRODUCTTYPE = createSelector(
  dropdownState,
  (state) => state.ProductType.content
);

export const UOM = createSelector(dropdownState, (state) => state.UOM.content);

export const PURCHASEUNIT = createSelector(
  dropdownState,
  (state) => state.PurchaseUnit.content
);
