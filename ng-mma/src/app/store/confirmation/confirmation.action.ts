import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';

export const confirmation_request = createAction(
  '[Product Type] Confirmation request',
  props<{ confirmation: () => Observable<{ message: string }> }>()
);
export const confirmation_success = createAction(
  '[Product Type] Confirmation Success'
);
export const confirmation_fail = createAction(
  '[Product Type] Confirmation Failure',
  props<{ error: HttpErrorResponse }>()
);
