import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { EntityDataService } from '@ngrx/data';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UomRoutingModule } from './uom-routing.module';
import { UomDataService } from './services/uom-data.service';
import { UomService } from './services/uom.service';
import { UomsComponent } from './uoms/uoms.component';

@NgModule({
  declarations: [
    UomsComponent
  ],
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
  ],
  providers: [UomService, UomDataService],
})
export class UomModule {
  constructor(
    entityDataService: EntityDataService,
    uomDataService: UomDataService
  ) {
    entityDataService.registerService('UOM', uomDataService);
  }
}
