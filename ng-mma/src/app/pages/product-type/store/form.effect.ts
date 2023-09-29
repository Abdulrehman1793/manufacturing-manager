import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as FormAction from '../../../shared/store';
import { SuccessHandlerService } from 'src/app/core/services/succes-handler.service';
import { Store } from '@ngrx/store';
import { ProductTypeState } from './product-type.state';
import { findPage } from './product-type.action';
import { search } from './product-type.selector';

@Injectable()
export class PurchaseUnitFormEffects {
  constructor(
    private actions$: Actions,
    private _succesHandle: SuccessHandlerService,
    private store: Store<ProductTypeState>
  ) {}

  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormAction.submitForm),
      switchMap(({ formData, save }) => {
        return save.call(formData).pipe(
          map((data) => {
            this._succesHandle.recordCreated('purchase-unit/' + data.id);
            return FormAction.submitFormSuccess({ data });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(FormAction.submitFormFailure({ error: error.error }));
          })
        );
      })
    )
  );

  submitFormSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FormAction.submitFormSuccess),
        withLatestFrom(this.store.select(search)),
        tap(([, search]) => {
          this.store.dispatch(findPage({ search }));
          this.store.dispatch(FormAction.resetForm());
        })
      ),
    { dispatch: false }
  );
}
