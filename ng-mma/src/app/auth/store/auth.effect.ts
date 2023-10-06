import { Injectable } from '@angular/core';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.action';
import { AuthService } from '../services/auth.service';
import { AuthState } from './auth.state';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _store: Store<AuthState>,
    private _authService: AuthService,
    private _localStorageService: LocalStorageService
  ) {}

  signin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signin_request),
      switchMap(({ payload }) =>
        this._authService.signinByUsername(payload).pipe(
          map((authResponse) => AuthActions.signin_success({ authResponse })),
          catchError((error) =>
            of(
              AuthActions.signin_failure({
                failure: error.message,
              })
            )
          )
        )
      )
    )
  );

  handleSigninSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signin_success),
        tap(({ authResponse }) => {
          this._localStorageService.setItem(authResponse);
        })
      ),
    { dispatch: false }
  );
}
