import { Page, Search } from 'src/app/core/models';
import { UnitOfMeasure } from '../models/uom';

export interface UOMState {
  page: Page<UnitOfMeasure> | undefined;
  search: Search;
  loading: boolean;
  failure?: string | undefined;
}

export const initialUOMState: UOMState = {
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
