import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private _snackBar: MatSnackBar) {}

  handleError(error: HttpErrorResponse): void {
    let message = 'Unexpected Server Error';

    if (error && error.error && error.error.message) {
      message = error.error.message;
    }

    this._snackBar.open(message, 'Error', { duration: 9 * 1000 });
  }
}
