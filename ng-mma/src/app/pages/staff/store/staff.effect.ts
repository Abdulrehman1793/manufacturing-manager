import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UOMActions from './staff.action';
import { StaffService } from '../services/staff.service';

@Injectable()
export class StaffEffects {
  constructor(private actions$: Actions, private _staffService: StaffService) {}

  findAllIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UOMActions.findPage),
      switchMap(({ search }) =>
        this._staffService.findPage(search).pipe(
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
