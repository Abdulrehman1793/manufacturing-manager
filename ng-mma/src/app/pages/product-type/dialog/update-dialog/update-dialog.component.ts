import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ProductTypeState } from '../../store/product-type.state';
import { submitForm } from '../../../../shared/store';
import { ProductTypeService } from '../../services/product-type.service';
import { ProductType } from '../../models/product-type';

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
    private store: Store<ProductType>,
    private _service: ProductTypeService
  ) {
    dialogRef.addPanelClass('custom-dialog-container');
    dialogRef.updateSize('50%');
  }

  onSave() {
    if (this.form.valid) {
      const staff: ProductType = this.form.value as unknown as ProductType;
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
