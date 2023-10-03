import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as RawGoodsActions from './raw-goods.action';
import { RawGoodsService } from '../services/raw-goods.service';

@Injectable()
export class RawGoodsEffects {
  constructor(private actions$: Actions, private _service: RawGoodsService) {}

  findPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RawGoodsActions.findPage),
      switchMap(({ search }) =>
        this._service.findPage(search).pipe(
          map((page) => RawGoodsActions.findPageSuccess({ page })),
          catchError((error) =>
            of(
              RawGoodsActions.findPageFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
