import { Page, Search } from '../../../core/models';
import { Staff } from '../models/staff';

export interface StaffState {
  page: Page<Staff> | undefined;
  search: Search;
  loading: boolean;
  failure?: string | undefined;
}

export const initialStaffState: StaffState = {
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
