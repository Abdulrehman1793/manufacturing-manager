import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataModule } from '@ngrx/data';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ConfirmationEffects, appReducer, entityConfig } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([ConfirmationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, trace: true, traceLimit: 75 }),
    EntityDataModule.forRoot(entityConfig),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
