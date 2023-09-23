export interface FormState<T> {
  data: T;
  submitting: boolean;
  submitted: boolean;
  error: string | null;
}

export const initialFormState: FormState<any> = {
  data: null,
  submitting: false,
  submitted: false,
  error: null,
};
