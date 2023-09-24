import { createReducer, on } from '@ngrx/store';
import * as FormActions from './form.actions';
import { initialFormState } from './form.state';

export const formReducer = createReducer(
  initialFormState,
  on(FormActions.submitForm, (state, { formData }) => ({
    ...state,
    data: formData,
    submitting: true,
    submitted: false,
    error: null,
  })),
  on(FormActions.submitFormSuccess, (state, { data }) => ({
    ...state,
    id: data.id,
    submitting: false,
    submitted: true,
  })),
  on(FormActions.submitFormFailure, (state, { error }) => ({
    ...state,
    submitting: false,
    error,
  }))
);
