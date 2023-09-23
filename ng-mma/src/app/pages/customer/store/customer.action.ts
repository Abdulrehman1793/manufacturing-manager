import { createAction, props } from '@ngrx/store';

import { Page, Search } from 'src/app/core/models';
import { Customer } from '../models/customer';

export const findPage = createAction(
  '[Customer] Find Page request',
  props<{ search: Search }>()
);
export const findPageSuccess = createAction(
  '[Customer] Successfully find page',
  props<{ page: Page<Customer> }>()
);
export const findAPageFailure = createAction(
  '[Customer] Find page error',
  props<{ error: string }>()
);
