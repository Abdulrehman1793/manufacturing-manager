import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { PurchaseUnitState } from '../../store/purchase-unit.state';
import { submitForm } from '../../../../shared/store';
import { PurchaseUnitService } from '../../services/purchase-unit.service';
import { PurchaseUnit } from '../../models/purchase-unit';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UpdateDialogComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
  });

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private store: Store<PurchaseUnit>,
    private _service: PurchaseUnitService
  ) {
    dialogRef.addPanelClass('custom-dialog-container');
    dialogRef.updateSize('50%');
  }

  onSave() {
    if (this.form.valid) {
      const staff: PurchaseUnit = this.form.value as unknown as PurchaseUnit;
      this.store.dispatch(
        submitForm({
          formData: this.form.value,
          save: () => this._service.create(staff),
        })
      );
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
