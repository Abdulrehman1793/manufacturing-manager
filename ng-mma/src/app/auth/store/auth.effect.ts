import { Injectable } from '@angular/core';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.action';
import { AuthService } from '../../core/services/auth.service';
import { AuthState } from './auth.state';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _store: Store<AuthState>,
    private _auth: AuthService
  ) {}
}
