import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ConfirmationActions from './confirmation.action';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class ConfirmationEffects {
  constructor(private actions$: Actions, private _store: Store<AppState>) {}

  request$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfirmationActions.confirmation_request),
      switchMap(({ confirmation }) =>
        confirmation().pipe(
          map(() => ConfirmationActions.confirmation_success()),
          catchError((error) =>
            of(ConfirmationActions.confirmation_fail({ error }))
          )
        )
      )
    )
  );

  submitFormSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ConfirmationActions.confirmation_success),
        tap(() => {
          this._store.dispatch(ConfirmationActions.confirmation_reset());
        })
      ),
    { dispatch: false }
  );
}
