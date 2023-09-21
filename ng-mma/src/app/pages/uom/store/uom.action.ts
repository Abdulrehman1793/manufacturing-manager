import { createAction, props } from '@ngrx/store';

import { Page, Search } from 'src/app/core/models';
import { UnitOfMeasure } from '../models/uom';

export const findPage = createAction(
  '[UOM] Find Page request',
  props<{ search: Search }>()
);
export const findPageSuccess = createAction(
  '[UOM] Successfully find page',
  props<{ page: Page<UnitOfMeasure> }>()
);
export const findAPageFailure = createAction(
  '[UOM] Find page error',
  props<{ error: string }>()
);
