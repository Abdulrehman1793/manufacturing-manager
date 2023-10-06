import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, of } from 'rxjs';
import { AuthState, auth_user } from '../store';

export const authenticateGuard: CanActivateFn = (route, state) => {
  const authStore = inject(Store<AuthState>);
  const router = inject(Router);
  return authStore.select(auth_user).pipe(
    map((user) => {
      if (user) {
        return true;
      }
      router.navigate(['auth/signin']);
      return false;
    })
  );
};
