import { createAction, props } from '@ngrx/store';

import { Page, Search } from 'src/app/core/models';
import { Staff } from '../models/staff';

export const findPage = createAction(
  '[Staff] Find Page request',
  props<{ search: Search }>()
);
export const findPageSuccess = createAction(
  '[Staff] Successfully find page',
  props<{ page: Page<Staff> }>()
);
export const findAPageFailure = createAction(
  '[Staff] Find page error',
  props<{ error: string }>()
);
