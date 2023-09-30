import {
  AfterViewInit,
  Component,
  ViewChild,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Search } from '../model';
import { tableMaterialModules } from './material.module';
import { Observable, merge, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, tableMaterialModules],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit, AfterViewInit {
  @Input() columns: CustomColumn[] = [];
  displayedColumns: string[] = [];

  @Input() pageSize$: Observable<number> = of(10);
  @Input() totalElements$: Observable<number> = of(0);

  @Input() rows$: Observable<T[]> = of([]);
  @Input() loading$: Observable<boolean> = of(false);
  @Input() error: string | undefined;

  @Output() onAdd: EventEmitter<T> = new EventEmitter();
  @Output() onUpate: EventEmitter<T> = new EventEmitter();
  @Output() onDelete: EventEmitter<T> = new EventEmitter();

  @Output() onSortAndPageUpdate: EventEmitter<Search> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  rowHoverStates: boolean[] = [];
  editButtonHoverStates: boolean[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((row) => row.columnDef);
    this.displayedColumns.push('actions');
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => {
      // If the user changes the sort order, reset back to the first page.
      this.paginator.pageIndex = 0;

      this.onSortAndPageUpdate.emit(this.getSortAndPage('sort'));
    });

    this.paginator.page.subscribe((_) => {
      this.onSortAndPageUpdate.emit(this.getSortAndPage('page'));
    });

    // merge(this.sort.sortChange, this.paginator.page).subscribe((event) => {
    //   // If it's a sortChange event, reset the pageIndex to 0
    //   this.paginator.pageIndex = 0;

    //   console.log(this.getSortAndPage('sort'));

    //   // Get the updated sort direction and emit the event
    //   this.onSortAndPageUpdate.emit(this.getSortAndPage('sort'));
    // });
  }

  getSortAndPage(action: 'sort' | 'page'): Search {
    return {
      action,
      sort: this.sort.active,
      direction: this.sort.direction,
      page: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
    };
  }

  create() {
    this.onAdd.emit();
  }

  update(t: T) {
    this.onUpate.emit(t);
  }

  delete(t: T) {
    this.onDelete.emit(t);
  }
}

export interface CustomColumn {
  columnDef: string;
  sort: boolean;
  title: string;
}
