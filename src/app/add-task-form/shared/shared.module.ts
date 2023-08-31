import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMinLengthFieldFormComponent } from '../error-min-length-field-form/error-min-length-field-form.component';

@NgModule({
  declarations: [
    ErrorMinLengthFieldFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMinLengthFieldFormComponent
  ]
})
export class SharedModule { }
