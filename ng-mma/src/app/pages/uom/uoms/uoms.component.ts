import { Component, OnInit, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';

import { UOMState, initialUOMState } from '../store/uom.state';
import { findPage, loading, pageSize, totalElements, uoms } from '../store';
import {
  CustomColumn,
  TableComponent,
} from 'src/app/shared/table/table.component';
import { UnitOfMeasure } from '../models/uom';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-uoms',
  templateUrl: './uoms.component.html',
  styleUrls: ['./uoms.component.scss'],
})
export class UomsComponent implements OnInit {
  customColumns: CustomColumn[] = [
    { columnDef: 'id', sort: false, title: 'Id' },
    {
      columnDef: 'name',
      title: 'Name',
      sort: true,
    },
  ];

  @ViewChild('uomTable') recipeTable = TableComponent<UnitOfMeasure>;

  uoms$: Observable<UnitOfMeasure[]> = of([]);
  loading$: Observable<boolean> = of(false);
  pageSize$: Observable<number> = of(10);
  totalElements$: Observable<number> = of(0);

  constructor(private uomStore: Store<UOMState>) {
    uomStore.dispatch(findPage({ search: initialUOMState.search }));
  }

  ngOnInit(): void {
    console.log('uoms');
    this.uoms$ = this.uomStore.select(uoms);
    this.loading$ = this.uomStore.select(loading);
    this.totalElements$ = this.uomStore.select(totalElements);
    this.pageSize$ = this.uomStore.select(pageSize);
  }
}
