import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Action, ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TableComponent } from '../../shared/table/table.component';
import { StaffRoutingModule } from './staff-routing.module';
import {
  StaffEffects,
  STAFF_CONTENT_STATE_NAME,
  STAFF_FORM_STATE_NAME,
  staffReducer,
  STAFF_STATE_NAME,
  StaffFormEffects,
} from './store';
import { HomeComponent } from './home/home.component';
import { StaffService } from './services/staff.service';
import { UpdateDialogComponent } from './dialog/update-dialog/update-dialog.component';
import { FormState, formReducer } from 'src/app/shared/store/form';
import { StaffState } from './store/staff.state';
import { Staff } from './models/staff';

const reducers: ActionReducerMap<StaffState> = {
  [STAFF_CONTENT_STATE_NAME]: staffReducer,
  [STAFF_FORM_STATE_NAME]: (
    state: FormState<Staff> | undefined,
    action: Action
  ) => {
    return formReducer(state, action);
  },
};

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
    MatSnackBarModule,
    TableComponent,
    StoreModule.forFeature(STAFF_STATE_NAME, reducers),
    EffectsModule.forFeature([StaffEffects, StaffFormEffects]),
  ],
  providers: [StaffService],
})
export class StaffModule {}
