import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { error, formId, submitted, submitting } from '../../store';

import { submitForm } from '../../../../shared/store';
import { FinishedGoodsService } from '../../services/finished-goods.service';
import { FinishedGoods } from '../../models/finished-goods';
import { EMPTY, Observable, combineLatest, of } from 'rxjs';
import { ProductType } from 'src/app/pages/product-type/models/product-type';
import { PRODUCTTYPE } from 'src/app/store/lookup';
import { KeyValuePair } from 'src/app/core/models';

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
  error$: Observable<any> = EMPTY;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.maxLength(500)]],
    type: [''],
    batchQty: [0],
    salesPrice: [0],
    batchCost: [0],
    itemCost: [0],
    itemProfit: [0],
    qtyOnHand: [0],
    image: [0],
  });

  productTypes$: Observable<KeyValuePair[]> = EMPTY;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FinishedGoods | undefined,
    private fb: FormBuilder,
    private store: Store<FinishedGoods>,
    private _service: FinishedGoodsService
  ) {
    dialogRef.addPanelClass('custom-dialog-container');
    dialogRef.updateSize('50%');
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.productTypes$ = this.store.select(PRODUCTTYPE);
    if (this.data && this.data.id) {
      this.form.patchValue(this.data);
    }
    this.submitted$ = this.store.select(submitted);
    this.submitting$ = this.store.select(submitting);
    this.formId$ = this.store.select(formId);
    this.error$ = this.store.select(error);

    combineLatest([this.submitted$, this.submitting$, this.formId$]).subscribe(
      ([submitted, submitting, formId]) => {
        if (formId != null && submitted && !submitting)
          this.dialogRef.close(true);
      }
    );
  }

  onSave() {
    if (this.form.valid) {
      const finishedGoods: FinishedGoods = this.form
        .value as unknown as FinishedGoods;
      this.store.dispatch(
        submitForm({
          formData: this.form.value,
          save: () =>
            this.data && this.data.id
              ? this._service.update({ ...finishedGoods, id: this.data.id })
              : this._service.create(finishedGoods),
        })
      );
    }
  }

  onClose() {
    this.dialogRef.close(false);
  }

  formValue() {
    console.log(this.form.value);
  }
}
