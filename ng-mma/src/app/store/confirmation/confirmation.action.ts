import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';

export const confirmation_request = createAction(
  '[Confirmation] request',
  props<{ confirmation: () => Observable<{ message: string }> }>()
);
export const confirmation_success = createAction('[Confirmation] Success');
export const confirmation_fail = createAction(
  '[Confirmation] Failure',
  props<{ error: HttpErrorResponse }>()
);
export const confirmation_reset = createAction('[Confirmation] Reset');
