import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { filesReducer, FILES_STATE_NAME, FilesEffects } from './store';
import { ProfileImageComponent } from './components';

@NgModule({
  declarations: [ProfileImageComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature(FILES_STATE_NAME, filesReducer),
    EffectsModule.forFeature([FilesEffects]),
  ],
  exports: [ProfileImageComponent],
})
export class FilesModule {}
