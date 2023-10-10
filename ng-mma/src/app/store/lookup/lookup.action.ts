import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const dropdown_request = createAction(
  '[Dropdown] request',
  props<{ keys: string[] }>()
);
export const dropdown_success = createAction(
  '[Dropdown] Success',
  props<{ data: any }>()
);
export const dropdown_fail = createAction(
  '[Dropdown] Failure',
  props<{ error: HttpErrorResponse }>()
);
