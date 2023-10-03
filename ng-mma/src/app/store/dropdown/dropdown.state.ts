import { KeyValuePair } from 'src/app/core/models/keyvalue-pair';

export interface DropdownState {
  ProductType: { content: KeyValuePair[]; error?: string };
  UOM: { content: KeyValuePair[]; error?: string };
  PurchaseUnit: { content: KeyValuePair[]; error?: string };
  loading: boolean;
  error?: string;
}

export const initialState: DropdownState = {
  ProductType: { content: [] },
  UOM: { content: [] },
  PurchaseUnit: { content: [] },
  loading: false,
};
