import { Page, Search } from '../../../core/models';
import { Customer } from '../models/customer';

export interface CustomerState {
  page: Page<Customer> | undefined;
  search: Search;
  loading: boolean;
  failure?: string | undefined;
}

export const initialCustomerState: CustomerState = {
  page: undefined,
  search: {
    page: 0,
    sort: 'id',
    pageSize: 10,
    action: 'page',
    direction: 'asc',
  },
  loading: false,
  failure: undefined,
};
