import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TableComponent } from '../../shared/table/table.component';
import { StaffRoutingModule } from './customer-routing.module';
import { CustomerEffects, CUSTOMER_STATE_NAME, customerReducer } from './store';
import { HomeComponent } from './home/home.component';
import { CustomerService } from './services/customer.service';
import { UpdateDialogComponent } from './dialog/update-dialog/update-dialog.component';

@NgModule({
  declarations: [HomeComponent, UpdateDialogComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TableComponent,
    StoreModule.forFeature(CUSTOMER_STATE_NAME, customerReducer),
    EffectsModule.forFeature([CustomerEffects]),
  ],
  providers: [CustomerService],
})
export class CustomerModule {}
