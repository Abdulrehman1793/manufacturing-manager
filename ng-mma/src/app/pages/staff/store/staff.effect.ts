import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as StaffActions from './staff.action';
import { StaffService } from '../services/staff.service';

@Injectable()
export class StaffEffects {
  constructor(private actions$: Actions, private _staffService: StaffService) {}

  findAllIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StaffActions.findPage),
      switchMap(({ search }) =>
        this._staffService.findPage(search).pipe(
          map((page) => StaffActions.findPageSuccess({ page })),
          catchError((error) =>
            of(
              StaffActions.findAPageFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
