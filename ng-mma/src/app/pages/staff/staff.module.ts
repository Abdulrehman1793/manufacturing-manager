import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { TableComponent } from '../../shared/table/table.component';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffEffects, STAFF_STATE_NAME, staffReducer } from './store';
import { HomeComponent } from './home/home.component';
import { StaffService } from './services/staff.service';
import { UpdateDialogComponent } from './dialog/update-dialog/update-dialog.component';

@NgModule({
  declarations: [HomeComponent, UpdateDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StaffRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TableComponent,
    StoreModule.forFeature(STAFF_STATE_NAME, staffReducer),
    EffectsModule.forFeature([StaffEffects]),
  ],
  providers: [StaffService],
})
export class StaffModule {}
