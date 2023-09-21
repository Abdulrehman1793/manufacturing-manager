import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UOMActions from './uom.action';
import { UomService } from '../services/uom.service';

@Injectable()
export class UOMEffects {
  constructor(private actions$: Actions, private _uomService: UomService) {}

  findAllIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UOMActions.findPage),
      switchMap(({ search }) =>
        this._uomService.findPage(search).pipe(
          map((page) => UOMActions.findPageSuccess({ page })),
          catchError((error) =>
            of(
              UOMActions.findAPageFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
