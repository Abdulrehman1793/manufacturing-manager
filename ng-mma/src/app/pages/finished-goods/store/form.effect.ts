import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';

import * as FormAction from '../../../shared/store';
import { Store } from '@ngrx/store';
import { FinishedGoodsState } from './finished-goods.state';
import { findPage } from './finished-goods.action';
import { search } from './finished-goods.selector';

@Injectable()
export class FinishedGoodsFormEffects {
  constructor(
    private actions$: Actions,
    private store: Store<FinishedGoodsState>
  ) {}

  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormAction.submitForm),
      switchMap(({ formData, save }) => {
        return save.call(formData).pipe(
          map((data) => {
            return FormAction.submitFormSuccess({ data });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(FormAction.submitFormFailure({ error }));
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
