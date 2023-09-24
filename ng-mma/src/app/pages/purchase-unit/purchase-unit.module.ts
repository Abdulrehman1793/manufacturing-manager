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
import { PurchaseUnitRoutingModule } from './purchase-unit-routing.module';
import {
  PurchaseUnitEffects,
  PURCHASE_UNIT_CONTENT_STATE_NAME,
  PURCHASE_UNIT_STATE_NAME,
  reducer,
  PURCHASE_UNIT_FORM_STATE_NAME,
  PurchaseUnitFormEffects,
} from './store';
import { HomeComponent } from './home/home.component';
import { PurchaseUnitService } from './services/purchase-unit.service';
import { UpdateDialogComponent } from './dialog/update-dialog/update-dialog.component';
import { FormState, formReducer } from 'src/app/shared/store/form';
import { PurchaseUnitState } from './store/purchase-unit.state';
import { PurchaseUnit } from './models/purchase-unit';

const reducers: ActionReducerMap<PurchaseUnitState> = {
  [PURCHASE_UNIT_CONTENT_STATE_NAME]: reducer,
  [PURCHASE_UNIT_FORM_STATE_NAME]: (
    state: FormState<PurchaseUnit> | undefined,
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
    PurchaseUnitRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    TableComponent,
    StoreModule.forFeature(PURCHASE_UNIT_STATE_NAME, reducers),
    EffectsModule.forFeature([PurchaseUnitEffects, PurchaseUnitFormEffects]),
  ],
  providers: [PurchaseUnitService],
})
export class PurchaseUnitModule {}
