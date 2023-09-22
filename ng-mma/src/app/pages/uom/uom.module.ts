import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UomRoutingModule } from './uom-routing.module';
import { UomService } from './services/uom.service';
import { UomsComponent } from './uoms/uoms.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UOMEffects, UOM_STATE_NAME, uomReducer } from './store';

import { TableComponent } from 'src/app/shared/table/table.component';

@NgModule({
  declarations: [UomsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UomRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TableComponent,
    StoreModule.forFeature(UOM_STATE_NAME, uomReducer),
    EffectsModule.forFeature([UOMEffects]),
  ],
  providers: [UomService],
})
export class UomModule {}
