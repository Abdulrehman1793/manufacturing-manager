import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tableMaterialModules } from './material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, tableMaterialModules],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { title?: string }
  ) {}

  onCancel() {
    this.dialogRef.close(false);
  }
}
