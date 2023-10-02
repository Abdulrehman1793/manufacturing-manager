import { createAction, props } from '@ngrx/store';

import { Page, Search } from 'src/app/core/models';
import { FinishedGoods } from '../models/finished-goods';

// page actions
export const findPage = createAction(
  '[FinishedGoods] Find Page request',
  props<{ search: Search }>()
);
export const findPageSuccess = createAction(
  '[FinishedGoods] Successfully find page',
  props<{ page: Page<FinishedGoods> }>()
);
export const findPageFailure = createAction(
  '[FinishedGoods] Find page error',
  props<{ error: string }>()
);
