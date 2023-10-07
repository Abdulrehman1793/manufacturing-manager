import { createAction, props } from '@ngrx/store';

import { User } from '../../core/models';
import { AuthRequest, AuthResponse } from '../models';

export const signin_request = createAction(
  '[Auth] Signin request',
  props<{ payload: AuthRequest }>()
);
export const signin_success = createAction(
  '[Auth] Signin success',
  props<{ authResponse: AuthResponse }>()
);
export const signin_failure = createAction(
  '[Auth] Signin failure',
  props<{ failure: string }>()
);

export const refresh_request = createAction('[Auth] Refresh token request');
export const refresh_progress = createAction('[Auth] Refresh token progress');
export const refresh_success = createAction(
  '[Auth] Refresh token success',
  props<{ authResponse: AuthResponse }>()
);
export const refresh_failure = createAction(
  '[Auth] Refresh token failure',
  props<{ failure: string }>()
);

export const signout_request = createAction('[Auth] Sign out request');
export const signout_success = createAction('[Auth] Sign out success');
export const signout_failure = createAction(
  '[Auth] Sign out failure',
  props<{ failure: string }>()
);

export const auth_request = createAction('[Auth] request');
export const auth_success = createAction(
  '[Auth] success',
  props<{ user: User }>()
);
export const auth_remove = createAction('[Auth] remove');
export const auth_failure = createAction(
  '[Auth] failure',
  props<{ failure: string }>()
);
