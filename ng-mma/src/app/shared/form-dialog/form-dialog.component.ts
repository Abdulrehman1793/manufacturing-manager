import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModules],
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  config: any = {
    text: {
      title: 'New Staff',
      save: 'Save',
      cancel: 'Close',
    },
    actions: {
      save: () => this.onSave(),
      cancel: () => this.onCancel(),
    },
  };

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onSave() {
    console.log(this.data);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
