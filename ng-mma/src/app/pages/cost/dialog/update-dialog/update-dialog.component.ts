import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { error, formId, submitted, submitting } from '../../store';

import { submitForm } from '../../../../shared/store';
import { CostService } from '../../services/cost.service';
import { Cost } from '../../models/cost';
import { EMPTY, Observable, combineLatest, of } from 'rxjs';
import { ProductType } from 'src/app/pages/product-type/models/product-type';
import { PRODUCTTYPE } from 'src/app/store/dropdown';
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
    name: ['', ],
    description: ['', ],
    type: [''],
    costUnit: ['', [Validators.maxLength(50)]],
    amount: [0],
  });

  productTypes$: Observable<KeyValuePair[]> = EMPTY;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cost | undefined,
    private fb: FormBuilder,
    private store: Store<Cost>,
    private _service: CostService
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
      const cost: Cost = this.form.value as unknown as Cost;
      this.store.dispatch(
        submitForm({
          formData: this.form.value,
          save: () =>
            this.data && this.data.id
              ? this._service.update({ ...cost, id: this.data.id })
              : this._service.create(cost),
        })
      );
    }
  }

  onClose() {
    this.dialogRef.close(false);
  }
}
