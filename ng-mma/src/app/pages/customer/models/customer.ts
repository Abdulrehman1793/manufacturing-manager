import { Person } from '../../../shared/model';

export interface Customer extends Person {
  readonly type: 'customer';
}
