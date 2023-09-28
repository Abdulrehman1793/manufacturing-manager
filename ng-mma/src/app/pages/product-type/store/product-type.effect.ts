import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ProductTypeActions from './product-type.action';
import { ProductTypeService } from '../services/product-type.service';

@Injectable()
export class PurchaseUnitEffects {
  constructor(
    private actions$: Actions,
    private _service: ProductTypeService
  ) {}

  findPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductTypeActions.findPage),
      switchMap(({ search }) =>
        this._service.findPage(search).pipe(
          map((page) => ProductTypeActions.findPageSuccess({ page })),
          catchError((error) =>
            of(
              ProductTypeActions.findPageFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );

  deleteRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductTypeActions.delete_request),
      switchMap(({ productType }) =>
        this._service.delete(productType.id).pipe(
          map(() => ProductTypeActions.delete_success()),
          catchError((error) => of(ProductTypeActions.delete_fail()))
        )
      )
    )
  );
}
