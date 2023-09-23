import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as FormAction from '../../../shared/store';
import { StaffService } from '../services/staff.service';

@Injectable()
export class StaffFormEffects {
  constructor(private actions$: Actions, private _staffService: StaffService) {}

  findAllIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormAction.submitForm),
      switchMap(({ formData }) =>
        this._staffService.createStaff(formData).pipe(
          map(() => FormAction.submitFormSuccess()),
          catchError((error) =>
            of(
              FormAction.submitFormFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
