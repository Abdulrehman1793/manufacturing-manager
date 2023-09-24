export interface FormState<T> {
  data: T;
  id: string | null;
  submitting: boolean;
  submitted: boolean;
  error: string | null;
}

export const initialFormState: FormState<any> = {
  data: null,
  id: null,
  submitting: false,
  submitted: false,
  error: null,
};
