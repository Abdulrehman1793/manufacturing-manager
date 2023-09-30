import { FormState } from 'src/app/shared/store';
import { Page, Search } from '../../../core/models';
import { Cost } from '../models/cost';
import { COST_CONTENT_STATE_NAME, COST_FORM_STATE_NAME } from './cost.selector';

export interface CostState {
  [COST_CONTENT_STATE_NAME]: CostContentState;
  [COST_FORM_STATE_NAME]: FormState<Cost>;
}

export interface CostContentState {
  page: Page<Cost> | undefined;
  search: Search;
  loading: boolean;
  failure?: string | undefined;
}

export const initialContentState: CostContentState = {
  page: undefined,
  search: {
    page: 0,
    sort: 'name',
    pageSize: 10,
    action: 'page',
    direction: 'asc',
  },
  loading: false,
  failure: undefined,
};
