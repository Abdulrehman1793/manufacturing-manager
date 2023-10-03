import { createAction, props } from '@ngrx/store';

import { Page, Search } from 'src/app/core/models';
import { RawGoods } from '../models/raw-goods';

// page actions
export const findPage = createAction(
  '[RawGoods] Find Page request',
  props<{ search: Search }>()
);
export const findPageSuccess = createAction(
  '[RawGoods] Successfully find page',
  props<{ page: Page<RawGoods> }>()
);
export const findPageFailure = createAction(
  '[RawGoods] Find page error',
  props<{ error: string }>()
);
