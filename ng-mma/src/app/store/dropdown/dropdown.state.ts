import { KeyValuePair } from 'src/app/core/models/keyvalue-pair';

export interface DropdownState {
  ProductType: { content: KeyValuePair[]; error?: string };
  loading: boolean;
  error?: string;
}

export const initialState: DropdownState = {
  ProductType: { content: [] },
  loading: false,
};
