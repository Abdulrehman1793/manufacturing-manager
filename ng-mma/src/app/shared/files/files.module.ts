import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { filesReducer, FILES_STATE_NAME } from './store';
import { FilesEffects } from './store/file.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(FILES_STATE_NAME, filesReducer),
    EffectsModule.forFeature([FilesEffects]),
  ],
})
export class FilesModule {}
