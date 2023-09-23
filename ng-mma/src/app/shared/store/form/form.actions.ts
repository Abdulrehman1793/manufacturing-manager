// generic-form.actions.ts
import { createAction, props } from '@ngrx/store';

export const submitForm = createAction('[Form] Submit Form');
export const submitFormSuccess = createAction('[Form] Submit Form Success');
export const submitFormFailure = createAction(
  '[Form] Submit Form Failure',
  props<{ error: string }>()
);
