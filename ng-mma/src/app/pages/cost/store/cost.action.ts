import { createAction, props } from '@ngrx/store';

import { Page, Search } from 'src/app/core/models';
import { Cost } from '../models/cost';

// page actions
export const findPage = createAction(
  '[Cost] Find Page request',
  props<{ search: Search }>()
);
export const findPageSuccess = createAction(
  '[Cost] Successfully find page',
  props<{ page: Page<Cost> }>()
);
export const findPageFailure = createAction(
  '[Cost] Find page error',
  props<{ error: string }>()
);
