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
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { TableComponent } from '../../shared/table/table.component';
import { ProductTypeRoutingModule } from './cost-routing.module';
import {
  CostEffects,
  COST_CONTENT_STATE_NAME,
  COST_STATE_NAME,
  reducer,
  COST_FORM_STATE_NAME,
  CostFormEffects,
} from './store';
import { HomeComponent } from './home/home.component';
import { UpdateDialogComponent } from './dialog/update-dialog/update-dialog.component';
import { FormState, formReducer } from 'src/app/shared/store/form';
import { CostState } from './store/cost.state';
import { Cost } from './models/cost';
import { CostService } from './services/cost.service';
import { SharedModule } from '../../shared/shared.module';

const reducers: ActionReducerMap<CostState> = {
  [COST_CONTENT_STATE_NAME]: reducer,
  [COST_FORM_STATE_NAME]: (
    state: FormState<Cost> | undefined,
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
    ProductTypeRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSelectModule,
    TableComponent,
    SharedModule,
    StoreModule.forFeature(COST_STATE_NAME, reducers),
    EffectsModule.forFeature([CostEffects, CostFormEffects]),
  ],
  providers: [CostService],
})
export class CostModule {}
