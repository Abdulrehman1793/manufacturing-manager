import { FormState } from 'src/app/shared/store';
import { Page, Search } from '../../../core/models';
import { RawGoods } from '../models/raw-goods';
import {
  RAW_GOODS_CONTENT_STATE_NAME,
  RAW_GOODS_FORM_STATE_NAME,
} from './raw-goods.selector';

export interface RawGoodsState {
  [RAW_GOODS_CONTENT_STATE_NAME]: RawGoodsContentState;
  [RAW_GOODS_FORM_STATE_NAME]: FormState<RawGoods>;
}

export interface RawGoodsContentState {
  page: Page<RawGoods> | undefined;
  search: Search;
  loading: boolean;
  failure?: string | undefined;
}

export const initialContentState: RawGoodsContentState = {
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
