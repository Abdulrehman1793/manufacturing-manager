import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
  debounceTime,
} from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.action';
import { AuthService } from '../services/auth.service';
import { AuthState } from './auth.state';
import { LocalStorageService } from '../services/local-storage.service';
import { auth_loading, refresh } from './auth.selector';

@Injectable()
export class AuthEffects {
  isRefreshingToken = false;
  constructor(
    private actions$: Actions,
    private _store: Store<AuthState>,
    private _authService: AuthService,
    private _localStorageService: LocalStorageService,
    private _router: Router
  ) {}

  auth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.auth_request),
      switchMap(({}) => {
        const response = this._localStorageService.getItem();
        if (response)
          return of(AuthActions.auth_success({ user: response.user }));
        else {
          this._router.navigate(['auth', 'signin']);
          return of(AuthActions.auth_failure({ failure: 'Not authenticated' }));
        }
      })
    )
  );

  handleAuthSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.auth_success),
        tap(() => this._router.navigate(['dashboard']))
      ),
    { dispatch: false }
  );

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
          this._router.navigate(['dashboard']);
        })
      ),
    { dispatch: false }
  );

  signout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signout_request),
      switchMap(({}) => {
        return this._authService
          .logout()
          .pipe(map(() => AuthActions.signout_success()));
      })
    )
  );

  handleSignoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signout_success),
        tap(({}) => {
          this._localStorageService.removeItem();
          this._router.navigate(['auth', 'signin']);
        })
      ),
    { dispatch: false }
  );

  refreshTokenRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.refresh_request),
      withLatestFrom(this._store.select(refresh)),
      switchMap(([, refresh]) => {
        const authResponse = this._localStorageService.getItem();
        if (!refresh && authResponse) {
          this._store.dispatch(AuthActions.refresh_progress());
          return of();
        }

        return of(
          AuthActions.refresh_failure({ failure: 'Refresh token not found' })
        );
      })
    )
  );

  refreshTokenProgress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.refresh_progress),
      switchMap(() => {
        const authResponse = this._localStorageService.getItem();
        if (authResponse) {
          return this._authService
            .refreshToken(authResponse?.refresh_token)
            .pipe(
              map((authResponse) =>
                AuthActions.refresh_success({ authResponse })
              ),
              catchError((error) =>
                of(
                  AuthActions.refresh_failure({
                    failure: error.message,
                  })
                )
              )
            );
        }

        return of(
          AuthActions.refresh_failure({ failure: 'Refresh token not found' })
        );
      })
    )
  );

  handleSuccessActions$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.refresh_success, AuthActions.signin_success),
        tap(({ authResponse }) => {
          this._localStorageService.setItem(authResponse);
          // this._router.navigate(['dashboard']);
          // return of();
        })
      ),
    { dispatch: false }
  );
}
