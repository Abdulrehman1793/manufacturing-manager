import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as FormAction from '../../../shared/store';
import { SuccessHandlerService } from 'src/app/core/services/succes-handler.service';

@Injectable()
export class PurchaseUnitFormEffects {
  constructor(
    private actions$: Actions,
    private _succesHandle: SuccessHandlerService
  ) {}

  findAllIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormAction.submitForm),
      switchMap(({ formData, save }) => {
        return save.call(formData).pipe(
          map((data) => {
            this._succesHandle.recordCreated('purchase-unit/' + data.id);
            return FormAction.submitFormSuccess({ data });
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return of(
              FormAction.submitFormFailure({
                error: error.error,
              })
            );
          })
        );
      })
    )
  );
}
