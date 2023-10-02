import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as FinishedGoodsActions from './finished-goods.action';
import { FinishedGoodsService } from '../services/finished-goods.service';

@Injectable()
export class FinishedGoodsEffects {
  constructor(
    private actions$: Actions,
    private _service: FinishedGoodsService
  ) {}

  findPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FinishedGoodsActions.findPage),
      switchMap(({ search }) =>
        this._service.findPage(search).pipe(
          map((page) => FinishedGoodsActions.findPageSuccess({ page })),
          catchError((error) =>
            of(
              FinishedGoodsActions.findPageFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
