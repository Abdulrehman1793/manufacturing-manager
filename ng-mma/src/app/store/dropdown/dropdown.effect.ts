import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as DropdownActions from './dropdown.action';
import { DropdownService } from 'src/app/core/services/dropdown.service';

@Injectable()
export class DropdownEffects {
  constructor(private actions$: Actions, private _service: DropdownService) {}

  process$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DropdownActions.dropdown_request),
      switchMap(({ keys }) => {
        return this._service.process(keys).pipe(
          map((data) => {
            return DropdownActions.dropdown_success({ data });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(DropdownActions.dropdown_fail({ error: error.error }));
          })
        );
      })
    )
  );
}
