import { FormState } from 'src/app/shared/store';
import { Page, Search } from '../../../core/models';
import { FinishedGoods } from '../models/finished-goods';
import {
  FINISHED_GOODS_CONTENT_STATE_NAME,
  FINISHED_GOODS_FORM_STATE_NAME,
} from './finished-goods.selector';

export interface FinishedGoodsState {
  [FINISHED_GOODS_CONTENT_STATE_NAME]: FinishedGoodsContentState;
  [FINISHED_GOODS_FORM_STATE_NAME]: FormState<FinishedGoods>;
}

export interface FinishedGoodsContentState {
  page: Page<FinishedGoods> | undefined;
  search: Search;
  loading: boolean;
  failure?: string | undefined;
}

export const initialContentState: FinishedGoodsContentState = {
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
