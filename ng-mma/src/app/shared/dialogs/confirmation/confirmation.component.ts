import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, combineLatest, of } from 'rxjs';
import { tableMaterialModules } from './material.module';
import { AppState } from 'src/app/store';
import {
  ConfirmationStatus,
  confirmation_loading,
  confirmation_request,
  confirmation_status,
} from 'src/app/store/confirmation';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, tableMaterialModules],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationDialog {
  loading$ = of(false);
  status$ = of(ConfirmationStatus.request);

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title?: string;
      confirmation: () => Observable<{ message: string }>;
    },
    private _store: Store<AppState>
  ) {
    this.loading$ = _store.select(confirmation_loading);
    this.status$ = _store.select(confirmation_status);

    combineLatest([this.loading$, this.status$]).subscribe(
      ([loading, status]) => {
        if (!loading && status === ConfirmationStatus.success)
          this.dialogRef.close(true);
      }
    );
  }

  onConfirmation() {
    this._store.dispatch(
      confirmation_request({ confirmation: this.data.confirmation })
    );
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
