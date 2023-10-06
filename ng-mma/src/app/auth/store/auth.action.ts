import { createAction, props } from '@ngrx/store';

import { User } from '../../core/models';

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
