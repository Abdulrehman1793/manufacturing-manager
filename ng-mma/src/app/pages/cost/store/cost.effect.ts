import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ProductTypeActions from './cost.action';
import { CostService } from '../services/cost.service';

@Injectable()
export class CostEffects {
  constructor(private actions$: Actions, private _service: CostService) {}

  findPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductTypeActions.findPage),
      switchMap(({ search }) =>
        this._service.findPage(search).pipe(
          map((page) => ProductTypeActions.findPageSuccess({ page })),
          catchError((error) =>
            of(
              ProductTypeActions.findPageFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
