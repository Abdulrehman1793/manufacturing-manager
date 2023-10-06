import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AUTH_STATE_NAME, AuthEffects, authReducer } from './store';
import { SingupComponent } from './components/singup/singup.component';
import { SinginComponent } from './components/singin/singin.component';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SinginComponent, SingupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    SharedModule,
    StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
