import { createAction, props } from '@ngrx/store';

import { Page, Search } from 'src/app/core/models';
import { PurchaseUnit } from '../models/purchase-unit';

export const findPage = createAction(
  '[Purchase Unit] Find Page request',
  props<{ search: Search }>()
);
export const findPageSuccess = createAction(
  '[Purchase Unit] Successfully find page',
  props<{ page: Page<PurchaseUnit> }>()
);
export const findAPageFailure = createAction(
  '[Purchase Unit] Find page error',
  props<{ error: string }>()
);
