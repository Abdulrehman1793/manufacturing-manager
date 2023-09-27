import { FormState } from 'src/app/shared/store';
import { Page, Search } from '../../../core/models';
import { ProductType } from '../models/product-type';
import {
  PRODUCT_TYPE_CONTENT_STATE_NAME,
  PRODUCT_TYPE_FORM_STATE_NAME,
} from './product-type.selector';

export interface ProductTypeState {
  [PRODUCT_TYPE_CONTENT_STATE_NAME]: ProductTypeContentState;
  [PRODUCT_TYPE_FORM_STATE_NAME]: FormState<ProductType>;
}

export interface ProductTypeContentState {
  page: Page<ProductType> | undefined;
  search: Search;
  loading: boolean;
  failure?: string | undefined;
}

export const initialContentState: ProductTypeContentState = {
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
