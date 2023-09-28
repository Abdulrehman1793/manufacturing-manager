import { HttpErrorResponse } from '@angular/common/http';

export interface ConfirmationState {
  type: 'delete';
  loading: boolean;
  error: HttpErrorResponse | undefined;
}

export const initialState: ConfirmationState = {
  type: 'delete',
  loading: false,
  error: undefined,
};
