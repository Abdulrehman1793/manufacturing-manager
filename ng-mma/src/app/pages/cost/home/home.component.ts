import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { CostState, initialContentState } from '../store/cost.state';
import { findPage, loading, pageSize, totalElements, rows } from '../store';
import {
  CustomColumn,
  DeleteEventData,
  TableComponent,
} from '../../../shared/table/table.component';
import { Search } from '../../../core/models';
import { Cost } from '../models/cost';
import { UpdateDialogComponent } from '../dialog/update-dialog/update-dialog.component';
import { ConfirmationDialog } from 'src/app/shared/dialogs';
import { CostService } from '../services/cost.service';
import { SuccessHandlerService } from 'src/app/core/services/succes-handler.service';
import { AppState } from 'src/app/store';
import { PRODUCTTYPE, dropdown_request } from 'src/app/store/dropdown';

@Component({
  selector: 'cost-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customColumns: CustomColumn[] = [
    {
      columnDef: 'name',
      title: 'Name',
      sort: true,
      direction: 'asc',
    },
    {
      columnDef: 'description',
      title: 'Description',
      sort: false,
    },
    {
      columnDef: 'type',
      title: 'Type',
      sort: false,
      lookup: PRODUCTTYPE,
    },
    {
      columnDef: 'costUnit',
      title: 'Cost Unit',
      sort: false,
    },
    {
      columnDef: 'amount',
      title: 'Amount',
      sort: false,
    },
  ];

  @ViewChild('costTable') costTable = TableComponent<Cost>;

  rows$: Observable<Cost[]> = of([]);
  loading$: Observable<boolean> = of(false);
  pageSize$: Observable<number> = of(10);
  totalElements$: Observable<number> = of(0);

  constructor(
    private _productTypeStore: Store<CostState>,
    private _store: Store<AppState>,
    public dialog: MatDialog,
    private _service: CostService,
    private _successService: SuccessHandlerService
  ) {
    _store.dispatch(dropdown_request({ keys: ['ProductType'] }));
    _productTypeStore.dispatch(
      findPage({ search: initialContentState.search })
    );
  }

  ngOnInit(): void {
    this.rows$ = this._productTypeStore.select(rows);
    this.loading$ = this._productTypeStore.select(loading);
    this.totalElements$ = this._productTypeStore.select(totalElements);
    this.pageSize$ = this._productTypeStore.select(pageSize);
  }

  onSortAndPageUpdate(search: Search) {
    this._productTypeStore.dispatch(findPage({ search }));
  }

  onCreate() {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._successService.snackBar(
          `New product type created successfully`,
          'Added',
          ''
        );
      }
    });
  }

  onUpdate(cost: Cost) {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: cost,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._successService.snackBar(
          `Cost "${cost.name}" updated successfully`,
          'Updated',
          ''
        );
      }
    });
  }

  onDelete(eventData: DeleteEventData<Cost>) {
    const cost = eventData.data;
    const search = eventData.search;
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        title: cost.name,
        confirmation: () => this._service.delete(cost.id),
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._successService.snackBar(
          `Cost "${cost.name}" deleted successfully`,
          'Deleted',
          ''
        );
        this._productTypeStore.dispatch(findPage({ search }));
      }
    });
  }
}
