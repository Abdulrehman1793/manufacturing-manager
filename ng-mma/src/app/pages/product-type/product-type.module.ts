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

import { TableComponent } from '../../shared/table/table.component';
import { ProductTypeRoutingModule } from './product-type-routing.module';
import {
  PurchaseUnitEffects,
  PRODUCT_TYPE_CONTENT_STATE_NAME,
  PRODUCT_TYPE_STATE_NAME,
  reducer,
  PRODUCT_TYPE_FORM_STATE_NAME,
  PurchaseUnitFormEffects,
} from './store';
import { HomeComponent } from './home/home.component';
import { UpdateDialogComponent } from './dialog/update-dialog/update-dialog.component';
import { FormState, formReducer } from 'src/app/shared/store/form';
import { ProductTypeState } from './store/product-type.state';
import { ProductType } from './models/product-type';
import { ProductTypeService } from './services/product-type.service';

const reducers: ActionReducerMap<ProductTypeState> = {
  [PRODUCT_TYPE_CONTENT_STATE_NAME]: reducer,
  [PRODUCT_TYPE_FORM_STATE_NAME]: (
    state: FormState<ProductType> | undefined,
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
    TableComponent,
    StoreModule.forFeature(PRODUCT_TYPE_STATE_NAME, reducers),
    EffectsModule.forFeature([PurchaseUnitEffects, PurchaseUnitFormEffects]),
  ],
  providers: [ProductTypeService],
})
export class ProductTypeModule {
  constructor() {}
}
