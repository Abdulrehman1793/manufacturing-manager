import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { StaffState } from '../../store/staff.state';
import { submitForm } from '../../../../shared/store';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss'],
})
export class UpdateDialogComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    phone: ['', [Validators.required, Validators.maxLength(24)]],
    email: ['', [Validators.required, Validators.maxLength(50)]],
    address: ['', [Validators.required, Validators.maxLength(200)]],
    city: ['', [Validators.maxLength(50)]],
    state: ['', [Validators.maxLength(50)]],
    zip: [''],
    type: ['staff'],
  });

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private store: Store<StaffState>
  ) {
    dialogRef.addPanelClass('custom-dialog-container');
    dialogRef.updateSize('50%');
  }

  onSave() {
    if (this.form.valid) {
      this.store.dispatch(submitForm({ formData: this.form.value }));
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
