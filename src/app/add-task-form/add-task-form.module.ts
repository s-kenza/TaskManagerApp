import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task/add-task-form.component';
import {SharedModule} from "./shared/shared.module";



@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AddTaskFormModule { }
