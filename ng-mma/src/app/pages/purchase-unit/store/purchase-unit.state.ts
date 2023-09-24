import { Page, Search } from '../../../core/models';
import { PurchaseUnit } from '../models/purchase-unit';
import {
  PURCHASE_UNIT_CONTENT_STATE_NAME,
  PURCHASE_UNIT_FORM_STATE_NAME,
} from './purchase-unit.selector';

export interface PurchaseUnitState {
  [PURCHASE_UNIT_CONTENT_STATE_NAME]: PurchaseUnitContentState;
  [PURCHASE_UNIT_FORM_STATE_NAME]: any;
}

export interface PurchaseUnitContentState {
  page: Page<PurchaseUnit> | undefined;
  search: Search;
  loading: boolean;
  failure?: string | undefined;
}

export const initialPurchaseUnitContentState: PurchaseUnitContentState = {
  page: undefined,
  search: {
    page: 0,
    sort: 'id',
    pageSize: 10,
    action: 'page',
    direction: 'asc',
  },
  loading: false,
  failure: undefined,
};
