// generic-form.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState } from './form.state';

const selectFormState = createFeatureSelector<FormState<any>>('form');

export const selectFormData = createSelector(
  selectFormState,
  (state) => state.data
);

export const selectSubmitting = createSelector(
  selectFormState,
  (state) => state.submitting
);

export const selectSubmitted = createSelector(
  selectFormState,
  (state) => state.submitted
);

export const selectError = createSelector(
  selectFormState,
  (state) => state.error
);
