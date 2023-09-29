// generic-form.actions.ts
import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';

export const submitForm = createAction(
  '[Form] Submit Form',
  props<{ formData: any; save: () => Observable<{ id: string }> }>()
);
export const submitFormSuccess = createAction(
  '[Form] Submit Form Success',
  props<{ data: { id: string } }>()
);
export const submitFormFailure = createAction(
  '[Form] Submit Form Failure',
  props<{ error: string }>()
);
export const resetForm = createAction('[Form] Reset Form');
