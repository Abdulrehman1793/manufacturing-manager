import { createAction, props } from '@ngrx/store';

import { Page, Search } from 'src/app/core/models';
import { ProductType } from '../models/product-type';

export const findPage = createAction(
  '[Product Type] Find Page request',
  props<{ search: Search }>()
);
export const findPageSuccess = createAction(
  '[Product Type] Successfully find page',
  props<{ page: Page<ProductType> }>()
);
export const findPageFailure = createAction(
  '[Product Type] Find page error',
  props<{ error: string }>()
);
