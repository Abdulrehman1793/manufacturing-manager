import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import { CustomerState, initialCustomerState } from '../store/customer.state';
import { findPage, loading, pageSize, totalElements, staffs } from '../store';
import {
  CustomColumn,
  TableComponent,
} from '../../../shared/table/table.component';
import { Search } from '../../../core/models';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customColumns: CustomColumn[] = [
    { columnDef: 'id', sort: false, title: 'Id' },
    {
      columnDef: 'name',
      title: 'Name',
      sort: true,
    },
    {
      columnDef: 'email',
      title: 'Email',
      sort: false,
    },
    {
      columnDef: 'city',
      title: 'City',
      sort: true,
    },
    {
      columnDef: 'phone',
      title: 'Phone',
      sort: true,
    },
  ];

  @ViewChild('customerTable') recipeTable = TableComponent<Customer>;

  customers$: Observable<Customer[]> = of([]);
  loading$: Observable<boolean> = of(false);
  pageSize$: Observable<number> = of(10);
  totalElements$: Observable<number> = of(0);

  constructor(private uomStore: Store<CustomerState>) {
    uomStore.dispatch(findPage({ search: initialCustomerState.search }));
  }

  ngOnInit(): void {
    this.customers$ = this.uomStore.select(staffs);
    this.loading$ = this.uomStore.select(loading);
    this.totalElements$ = this.uomStore.select(totalElements);
    this.pageSize$ = this.uomStore.select(pageSize);
  }

  onSortAndPageUpdate(search: Search) {
    this.uomStore.dispatch(findPage({ search }));
  }
}
