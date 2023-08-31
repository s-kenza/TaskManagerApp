import { Injectable } from '@angular/core';
import { CRUDTaskListServiceService } from "./crudtask-list-service.service";
import { Task, TaskState } from "../model/Task";
import { ByStatutTaskService } from "../interface/bystatuttaskservice";
import { Observable, of } from "rxjs";
import {TaskList} from "../model/TaskList";

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListServiceService extends CRUDTaskListServiceService implements ByStatutTaskService {

  constructor() {
    super();
  }

  getTasksByStatus(status: TaskState) {
    const tasksByStatus = this.taskList.tasks.filter(task => task.state === status);
    return of(new TaskList(tasksByStatus));
  }
}
