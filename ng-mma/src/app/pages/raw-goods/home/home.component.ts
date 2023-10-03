import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { RawGoodsState, initialContentState } from '../store/raw-goods.state';
import { findPage, loading, pageSize, totalElements, rows } from '../store';
import {
  CustomColumn,
  DeleteEventData,
  TableComponent,
} from '../../../shared/table/table.component';
import { Search } from '../../../core/models';
import { RawGoods } from '../models/raw-goods';
import { UpdateDialogComponent } from '../dialog/update-dialog/update-dialog.component';
import { ConfirmationDialog } from 'src/app/shared/dialogs';
import { RawGoodsService } from '../services/raw-goods.service';
import { SuccessHandlerService } from 'src/app/core/services/succes-handler.service';
import { AppState } from 'src/app/store';
import { PRODUCTTYPE, dropdown_request } from 'src/app/store/dropdown';

@Component({
  selector: 'app-home',
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
      columnDef: 'upc',
      title: 'UPC',
      sort: false,
    },
    {
      columnDef: 'reorderQty',
      title: 'Reorder Qty',
      sort: false,
    },
    {
      columnDef: 'minQty',
      title: 'Min. Qty',
      sort: false,
    },
    {
      columnDef: 'purchaseUnitQty',
      title: 'Purchase Unit Qty',
      sort: false,
    },
    {
      columnDef: 'amount',
      title: 'Amount',
      sort: false,
    },
    {
      columnDef: 'qtyOnHand',
      title: 'Qty On Hand',
      sort: false,
    },
  ];

  @ViewChild('finishedGoodsTable') costTable = TableComponent<RawGoods>;

  rows$: Observable<RawGoods[]> = of([]);
  loading$: Observable<boolean> = of(false);
  pageSize$: Observable<number> = of(10);
  totalElements$: Observable<number> = of(0);

  constructor(
    private finishedGoodsStore: Store<RawGoodsState>,
    private _store: Store<AppState>,
    public dialog: MatDialog,
    private _service: RawGoodsService,
    private _successService: SuccessHandlerService
  ) {
    _store.dispatch(
      dropdown_request({ keys: ['ProductType', 'UOM', 'PurchaseUnit'] })
    );
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
          `New raw goods created successfully`,
          'Added',
          ''
        );
      }
    });
  }

  onUpdate(rawGoods: RawGoods) {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: rawGoods,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._successService.snackBar(
          `Raw goods "${rawGoods.name}" updated successfully`,
          'Updated',
          ''
        );
      }
    });
  }

  onDelete(eventData: DeleteEventData<RawGoods>) {
    const rawGoods = eventData.data;
    const search = eventData.search;
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        title: rawGoods.name,
        confirmation: () => this._service.delete(rawGoods.id),
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._successService.snackBar(
          `Raw goods "${rawGoods.name}" deleted successfully`,
          'Deleted',
          ''
        );
        this.finishedGoodsStore.dispatch(findPage({ search }));
      }
    });
  }
}
