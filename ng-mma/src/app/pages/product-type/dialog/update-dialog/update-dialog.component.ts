import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { formId, submitted, submitting } from '../../store';

import { submitForm } from '../../../../shared/store';
import { ProductTypeService } from '../../services/product-type.service';
import { ProductType } from '../../models/product-type';
import { EMPTY, Observable, combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UpdateDialogComponent implements OnInit {
  submitting$: Observable<boolean> = of(false);
  submitted$: Observable<boolean> = of(false);
  formId$: Observable<string | null> = EMPTY;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.maxLength(250)]],
    type: ['others', [Validators.required]],
  });

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductType | undefined,
    private fb: FormBuilder,
    private store: Store<ProductType>,
    private _service: ProductTypeService
  ) {
    dialogRef.addPanelClass('custom-dialog-container');
    dialogRef.updateSize('50%');
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    if (this.data && this.data.id) {
      this.form.patchValue(this.data);
    }
    this.submitted$ = this.store.select(submitted);
    this.submitting$ = this.store.select(submitting);
    this.formId$ = this.store.select(formId);

    combineLatest([this.submitted$, this.submitting$, this.formId$]).subscribe(
      ([submitted, submitting, formId]) => {
        if (formId != null && submitted && !submitting)
          this.dialogRef.close(true);
      }
    );
  }

  onSave() {
    if (this.form.valid) {
      const productType: ProductType = this.form
        .value as unknown as ProductType;
      this.store.dispatch(
        submitForm({
          formData: this.form.value,
          save: () =>
            this.data && this.data.id
              ? this._service.update({ ...productType, id: this.data.id })
              : this._service.create(productType),
        })
      );
    }
  }

  onClose() {
    this.dialogRef.close(false);
  }
}
