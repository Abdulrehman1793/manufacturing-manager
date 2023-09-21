import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { appReducer, entityConfig } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, trace: true, traceLimit: 75 }),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    // {
    //   provide: DefaultDataServiceConfig,
    //   useValue: { root: 'http://localhost:8080/api/v2' },
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
