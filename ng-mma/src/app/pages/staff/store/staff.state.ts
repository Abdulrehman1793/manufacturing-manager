import { Page, Search } from '../../../core/models';
import { Staff } from '../models/staff';
import {
  STAFF_CONTENT_STATE_NAME,
  STAFF_FORM_STATE_NAME,
} from './staff.selector';

export interface StaffState {
  [STAFF_CONTENT_STATE_NAME]: StaffContentState;
  [STAFF_FORM_STATE_NAME]: any;
}

export interface StaffContentState {
  page: Page<Staff> | undefined;
  search: Search;
  loading: boolean;
  failure?: string | undefined;
}

export const initialStaffContentState: StaffContentState = {
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
