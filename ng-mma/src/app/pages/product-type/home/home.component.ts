import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import {
  ProductTypeState,
  initialContentState,
} from '../store/product-type.state';
import {
  findPage,
  loading,
  pageSize,
  totalElements,
  purchaseUnits,
} from '../store';
import {
  CustomColumn,
  TableComponent,
} from '../../../shared/table/table.component';
import { Search } from '../../../core/models';
import { ProductType } from '../models/product-type';
import { UpdateDialogComponent } from '../dialog/update-dialog/update-dialog.component';

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
      columnDef: 'type',
      title: 'Type',
      sort: false,
    },
    {
      columnDef: 'description',
      title: 'Description',
      sort: false,
    },
  ];

  @ViewChild('productTypeTable') productTypeTable = TableComponent<ProductType>;

  purchaseUnits$: Observable<ProductType[]> = of([]);
  loading$: Observable<boolean> = of(false);
  pageSize$: Observable<number> = of(10);
  totalElements$: Observable<number> = of(0);

  constructor(
    private store: Store<ProductTypeState>,
    public dialog: MatDialog
  ) {
    store.dispatch(findPage({ search: initialContentState.search }));
  }

  ngOnInit(): void {
    this.purchaseUnits$ = this.store.select(purchaseUnits);
    this.loading$ = this.store.select(loading);
    this.totalElements$ = this.store.select(totalElements);
    this.pageSize$ = this.store.select(pageSize);
  }

  onSortAndPageUpdate(search: Search) {
    this.store.dispatch(findPage({ search }));
  }

  onCreate() {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  onUpdate(productType: ProductType) {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: productType,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
