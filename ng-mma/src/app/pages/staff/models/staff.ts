import { Person } from '../../../shared/model';

export interface Staff extends Person {
  readonly type: 'staff';
}
