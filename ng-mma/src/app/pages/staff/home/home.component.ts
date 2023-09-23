import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { StaffState, initialStaffState } from '../store/staff.state';
import { findPage, loading, pageSize, totalElements, staffs } from '../store';
import {
  CustomColumn,
  TableComponent,
} from '../../../shared/table/table.component';
import { Search } from '../../../core/models';
import { Staff } from '../models/staff';
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

  @ViewChild('staffTable') recipeTable = TableComponent<Staff>;

  staffs$: Observable<Staff[]> = of([]);
  loading$: Observable<boolean> = of(false);
  pageSize$: Observable<number> = of(10);
  totalElements$: Observable<number> = of(0);

  constructor(private uomStore: Store<StaffState>, public dialog: MatDialog) {
    uomStore.dispatch(findPage({ search: initialStaffState.search }));
  }

  ngOnInit(): void {
    this.staffs$ = this.uomStore.select(staffs);
    this.loading$ = this.uomStore.select(loading);
    this.totalElements$ = this.uomStore.select(totalElements);
    this.pageSize$ = this.uomStore.select(pageSize);
  }

  onSortAndPageUpdate(search: Search) {
    this.uomStore.dispatch(findPage({ search }));
  }

  onCreate() {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: { name: 'this.name', animal: 'this.animal' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
