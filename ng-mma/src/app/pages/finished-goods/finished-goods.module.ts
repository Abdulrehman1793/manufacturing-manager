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
import { ProductTypeRoutingModule } from './finished-goods-routing.module';
import {
  FinishedGoodsEffects,
  FINISHED_GOODS_CONTENT_STATE_NAME,
  FINISHED_GOODS_STATE_NAME,
  reducer,
  FINISHED_GOODS_FORM_STATE_NAME,
  FinishedGoodsFormEffects,
} from './store';
import { HomeComponent } from './home/home.component';
import { UpdateDialogComponent } from './dialog/update-dialog/update-dialog.component';
import { FormState, formReducer } from 'src/app/shared/store/form';
import { FinishedGoodsState } from './store/finished-goods.state';
import { FinishedGoods } from './models/finished-goods';
import { FinishedGoodsService } from './services/finished-goods.service';
import { FormErrorPipe } from 'src/app/shared/pipes';

const reducers: ActionReducerMap<FinishedGoodsState> = {
  [FINISHED_GOODS_CONTENT_STATE_NAME]: reducer,
  [FINISHED_GOODS_FORM_STATE_NAME]: (
    state: FormState<FinishedGoods> | undefined,
    action: Action
  ) => {
    return formReducer(state, action);
  },
};

@NgModule({
  declarations: [HomeComponent, UpdateDialogComponent, FormErrorPipe],
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
    StoreModule.forFeature(FINISHED_GOODS_STATE_NAME, reducers),
    EffectsModule.forFeature([FinishedGoodsEffects, FinishedGoodsFormEffects]),
  ],
  providers: [FinishedGoodsService],
})
export class FinishedGoodsModule {}
