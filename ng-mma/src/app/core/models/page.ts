import { Pageable, Sort } from '.';

export interface Page<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  page: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort;
  totalElements: number;
  totalPages: number;
}
