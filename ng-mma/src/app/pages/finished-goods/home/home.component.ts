import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import {
  FinishedGoodsState,
  initialContentState,
} from '../store/finished-goods.state';
import { findPage, loading, pageSize, totalElements, rows } from '../store';
import {
  CustomColumn,
  DeleteEventData,
  TableComponent,
} from '../../../shared/table/table.component';
import { Search } from '../../../core/models';
import { FinishedGoods } from '../models/finished-goods';
import { UpdateDialogComponent } from '../dialog/update-dialog/update-dialog.component';
import { ConfirmationDialog } from 'src/app/shared/dialogs';
import { FinishedGoodsService } from '../services/finished-goods.service';
import { SuccessHandlerService } from 'src/app/core/services/succes-handler.service';
import { AppState } from 'src/app/store';
import { PRODUCTTYPE, dropdown_request } from 'src/app/store/dropdown';

@Component({
  selector: 'finished-goods-home',
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
      columnDef: 'batchQty',
      title: 'Batch Qty',
      sort: false,
    },
    {
      columnDef: 'batchCost',
      title: 'Batch Cost',
      sort: false,
    },
    {
      columnDef: 'itemCost',
      title: 'Item Cost',
      sort: false,
    },
    {
      columnDef: 'itemProfit',
      title: 'Item Profit',
      sort: false,
    },
    {
      columnDef: 'salesPrice',
      title: 'Sales Price',
      sort: false,
    },
    {
      columnDef: 'qtyOnHand',
      title: 'Qty On Hand',
      sort: false,
    },
  ];

  @ViewChild('finishedGoodsTable') costTable = TableComponent<FinishedGoods>;

  rows$: Observable<FinishedGoods[]> = of([]);
  loading$: Observable<boolean> = of(false);
  pageSize$: Observable<number> = of(10);
  totalElements$: Observable<number> = of(0);

  constructor(
    private finishedGoodsStore: Store<FinishedGoodsState>,
    private _store: Store<AppState>,
    public dialog: MatDialog,
    private _service: FinishedGoodsService,
    private _successService: SuccessHandlerService
  ) {
    _store.dispatch(dropdown_request({ keys: ['ProductType'] }));
    finishedGoodsStore.dispatch(
      findPage({ search: initialContentState.search })
    );
  }

  ngOnInit(): void {
    this.rows$ = this.finishedGoodsStore.select(rows);
    this.loading$ = this.finishedGoodsStore.select(loading);
    this.totalElements$ = this.finishedGoodsStore.select(totalElements);
    this.pageSize$ = this.finishedGoodsStore.select(pageSize);
  }

  onSortAndPageUpdate(search: Search) {
    this.finishedGoodsStore.dispatch(findPage({ search }));
  }

  onCreate() {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: undefined,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._successService.snackBar(
          `New finished goods created successfully`,
          'Added',
          ''
        );
      }
    });
  }

  onUpdate(finishedGoods: FinishedGoods) {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: finishedGoods,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._successService.snackBar(
          `Finished goods "${finishedGoods.name}" updated successfully`,
          'Updated',
          ''
        );
      }
    });
  }

  onDelete(eventData: DeleteEventData<FinishedGoods>) {
    const finishedGoods = eventData.data;
    const search = eventData.search;
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        title: finishedGoods.name,
        confirmation: () => this._service.delete(finishedGoods.id),
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._successService.snackBar(
          `Finished goods "${finishedGoods.name}" deleted successfully`,
          'Deleted',
          ''
        );
        this.finishedGoodsStore.dispatch(findPage({ search }));
      }
    });
  }
}
