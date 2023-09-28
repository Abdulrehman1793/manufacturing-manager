import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ConfirmationActions from './confirmation.action';

@Injectable()
export class ConfirmationEffects {
  constructor(private actions$: Actions) {}

  findPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfirmationActions.confirmation_request),
      switchMap(({ confirmation }) =>
        confirmation().pipe(
          map((page) => ConfirmationActions.confirmation_success()),
          catchError((error) =>
            of(ConfirmationActions.confirmation_fail({ error }))
          )
        )
      )
    )
  );
}
