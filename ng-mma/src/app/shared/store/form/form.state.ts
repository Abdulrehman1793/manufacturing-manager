import { HttpErrorResponse } from '@angular/common/http';

export interface FormState<T> {
  data: T;
  id: string | null;
  submitting: boolean;
  submitted: boolean;
  error: HttpErrorResponse | null;
}

export const initialFormState: FormState<any> = {
  data: null,
  id: null,
  submitting: false,
  submitted: false,
  error: null,
};
