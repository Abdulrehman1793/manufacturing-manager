import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as PurchaseUnitActions from './purchase-unit.action';
import { PurchaseUnitService } from '../services/purchase-unit.service';

@Injectable()
export class PurchaseUnitEffects {
  constructor(
    private actions$: Actions,
    private _service: PurchaseUnitService
  ) {}

  findAllIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PurchaseUnitActions.findPage),
      switchMap(({ search }) =>
        this._service.findPage(search).pipe(
          map((page) => PurchaseUnitActions.findPageSuccess({ page })),
          catchError((error) =>
            of(
              PurchaseUnitActions.findAPageFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
