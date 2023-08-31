import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../../model/Task";
import {CRUDTaskListServiceService} from "../../service/crudtask-list-service.service";

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.scss']
})
export class MainAddTaskFormComponent {

  constructor(
    private crudService: CRUDTaskListServiceService,
  ) {}
  createTask(task: any) : Observable<Task> {
    return this.crudService.createTask(new Task(task.id,task.title, task.description, task.state, task.date));
  }
}
