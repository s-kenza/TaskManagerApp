import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTaskComponent } from './task/main-task/main-task.component';
import { TaskComponent } from './task/task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { ColorStateDirective } from '../app/directive/color-state.directive';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { CRUDTaskListServiceService } from "./service/crudtask-list-service.service";
import { AddTaskFormComponent } from "./add-task-form/add-task/add-task-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainAddTaskFormComponent } from './add-task-form/main-add-task-form/main-add-task-form.component';
import { ErrorMinLengthFieldFormComponent } from './add-task-form/error-min-length-field-form/error-min-length-field-form.component';
import { DeleteTaskComponent } from './add-task-form/delete-task/delete-task.component';
import { MainDeleteTaskFormComponent } from './add-task-form/main-delete-task-form/main-delete-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTaskComponent,
    TaskComponent,
    TaskListComponent,
    ColorStateDirective,
    DateFormatPipe,
    AddTaskFormComponent,
    MainAddTaskFormComponent,
    ErrorMinLengthFieldFormComponent,
    DeleteTaskComponent,
    MainDeleteTaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CRUDTaskListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
