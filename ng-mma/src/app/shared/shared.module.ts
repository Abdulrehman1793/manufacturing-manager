import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorPipe } from './pipes';

@NgModule({
  declarations: [FormErrorPipe],
  imports: [CommonModule],
  exports: [FormErrorPipe],
})
export class SharedModule {}
