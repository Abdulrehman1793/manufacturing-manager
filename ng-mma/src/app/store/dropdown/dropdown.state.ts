import { KeyValuePair } from 'src/app/core/models/keyvalue-pair';

export interface DropdownState {
  productType: { content: KeyValuePair[]; error?: string };
  loading: boolean;
  error?: string;
}

export const initialState: DropdownState = {
  productType: { content: [] },
  loading: false,
};
