import {
  AfterViewInit,
  Component,
  ViewChild,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Search } from '../model';
import { tableMaterialModules } from './material.module';
import { Observable, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { MemoizedSelector, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { DropdownState } from 'src/app/store/dropdown';
import { KeyValuePair } from 'src/app/core/models';
import { DropdownPipe } from '../pipes';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    tableMaterialModules,
    DropdownPipe,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Output() onDelete: EventEmitter<DeleteEventData<T>> = new EventEmitter();

  @Output() onSortAndPageUpdate: EventEmitter<Search> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private cdr: ChangeDetectorRef,
    private dropdownStore: Store<DropdownState>
  ) {}

  rowHoverStates: boolean[] = [];
  editButtonHoverStates: boolean[] = [];

  lookups: any = {};

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((row) => {
      if (row.lookup != null) {
        this.lookups[row.lookup.toString()] = this.dropdownStore.select(
          row.lookup
        );
      }
      return row.columnDef;
    });
    this.displayedColumns.push('actions');
  }

  ngAfterViewInit(): void {
    const firstSortableColumn = this.columns.find(
      (column) => column.sort === true
    );
    if (firstSortableColumn) {
      this.sort.sort({
        id: firstSortableColumn.columnDef,
        start: firstSortableColumn.direction || 'asc',
        disableClear: false,
      });
    } else {
    }

    this.sort.sortChange.subscribe(() => {
      // If the user changes the sort order, reset back to the first page.
      this.paginator.pageIndex = 0;

      this.onSortAndPageUpdate.emit(this.getSortAndPage('sort'));
    });

    this.paginator.page.subscribe((_) => {
      this.onSortAndPageUpdate.emit(this.getSortAndPage('page'));
    });
    this.cdr.detectChanges();
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
    this.onDelete.emit({ data: t, search: this.getSortAndPage('page') });
  }
}

export interface CustomColumn {
  columnDef: string;
  sort: boolean;
  title: string;
  direction?: 'asc' | 'desc';
  lookup?: MemoizedSelector<
    DropdownState,
    KeyValuePair[],
    (s1: DropdownState) => KeyValuePair[]
  >;
}

export interface DeleteEventData<T> {
  data: T; // Your main data
  search: Search; // Other data you want to pass
}
