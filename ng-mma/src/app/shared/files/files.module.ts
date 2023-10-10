import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { filesReducer, FILES_STATE_NAME } from './store';
import { FilesEffects } from './store/file.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(FILES_STATE_NAME, filesReducer),
    EffectsModule.forFeature([FilesEffects]),
  ],
})
export class FilesModule {}
