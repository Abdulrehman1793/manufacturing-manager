import { Injectable } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuccessHandlerService {
  constructor(private _snackBar: MatSnackBar) {}

  recordCreated(route: string): MatSnackBarRef<SimpleSnackBar> {
    const snackBarRef = this._snackBar.open(
      'Record created successfully',
      'Open!',
      {
        duration: 9 * 1000,
      }
    );

    // TODO: implement open to edit page
    snackBarRef.onAction().pipe(
      map((data) => {
        console.log(data);
      })
    );
    return snackBarRef;
  }

  snackBar(
    message: string,
    action: string,
    route: string
  ): MatSnackBarRef<SimpleSnackBar> {
    const snackBarRef = this._snackBar.open(message, action, {
      duration: 9 * 1000,
    });

    // TODO: implement open to edit page
    snackBarRef.onAction().pipe(
      map((data) => {
        console.log(data);
      })
    );
    return snackBarRef;
  }
}
