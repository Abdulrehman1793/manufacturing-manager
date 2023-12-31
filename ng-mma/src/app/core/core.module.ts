import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ErrorHandlerService } from './services/error-handler.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatRippleModule,
  ],
  providers: [
    ErrorHandlerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
