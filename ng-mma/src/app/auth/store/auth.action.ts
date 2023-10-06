import { createAction, props } from '@ngrx/store';

import { User } from '../../core/models';
import { AuthPayload } from '../models';

export const signin_request = createAction(
  '[Auth] Signin request',
  props<{ payload: AuthPayload }>()
);
export const signin_success = createAction(
  '[Auth] Signin success',
  props<{ user: User }>()
);
export const signin_failure = createAction(
  '[Auth] Signin failure',
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
