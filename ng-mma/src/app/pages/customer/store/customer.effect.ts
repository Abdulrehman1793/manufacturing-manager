import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UOMActions from './customer.action';
import { CustomerService } from '../services/customer.service';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private _customerService: CustomerService
  ) {}

  findAllIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UOMActions.findPage),
      switchMap(({ search }) =>
        this._customerService.findPage(search).pipe(
          map((page) => UOMActions.findPageSuccess({ page })),
          catchError((error) =>
            of(
              UOMActions.findAPageFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}
