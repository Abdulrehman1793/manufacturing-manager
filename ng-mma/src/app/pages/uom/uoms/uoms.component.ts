import { Component } from '@angular/core';

import { UOMState } from '../store/uom.state';
import { Store } from '@ngrx/store';
import { findPage } from '../store';

@Component({
  selector: 'app-uoms',
  templateUrl: './uoms.component.html',
  styleUrls: ['./uoms.component.scss'],
})
export class UomsComponent {
  constructor(_store: Store<UOMState>) {
    _store.dispatch(
      findPage({
        search: {
          action: 'page',
          page: 0,
          pageSize: 5,
          sort: 'name',
          direction: 'asc',
        },
      })
    );
  }
}
