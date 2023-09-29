export enum ConfirmationStatus {
  request,
  success,
  error,
}

export interface ConfirmationState {
  type: 'delete';
  loading: boolean;
  status: ConfirmationStatus;
  message: any;
}

export const initialState: ConfirmationState = {
  type: 'delete',
  loading: false,
  status: ConfirmationStatus.request,
  message: undefined,
};
