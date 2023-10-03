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
import { RawGoodsRoutingModule } from './raw-goods-routing.module';
import {
  RawGoodsEffects,
  RAW_GOODS_CONTENT_STATE_NAME,
  RAW_GOODS_STATE_NAME,
  reducer,
  RAW_GOODS_FORM_STATE_NAME,
  RawGoodsFormEffects,
} from './store';
import { HomeComponent } from './home/home.component';
import { UpdateDialogComponent } from './dialog/update-dialog/update-dialog.component';
import { FormState, formReducer } from 'src/app/shared/store/form';
import { RawGoodsState } from './store/raw-goods.state';
import { RawGoods } from './models/raw-goods';
import { RawGoodsService } from './services/raw-goods.service';
import { SharedModule } from '../../shared/shared.module';

const reducers: ActionReducerMap<RawGoodsState> = {
  [RAW_GOODS_CONTENT_STATE_NAME]: reducer,
  [RAW_GOODS_FORM_STATE_NAME]: (
    state: FormState<RawGoods> | undefined,
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
    RawGoodsRoutingModule,
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
    StoreModule.forFeature(RAW_GOODS_STATE_NAME, reducers),
    EffectsModule.forFeature([RawGoodsEffects, RawGoodsFormEffects]),
  ],
  providers: [RawGoodsService],
})
export class RawGoodsModule {}
