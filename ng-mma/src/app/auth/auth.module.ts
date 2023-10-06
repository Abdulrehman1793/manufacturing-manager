import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AUTH_STATE_NAME, AuthEffects, authReducer } from './store';
import { SingupComponent } from './components/singup/singup.component';

@NgModule({
  declarations: [
    SingupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
