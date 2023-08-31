import { Injectable } from '@angular/core';
import { CRUDTaskListServiceService } from './crudtask-list-service.service';
import { ByStatutTaskListServiceService } from './by-statut-task-list-service.service';
import { Task, TaskState } from '../model/Task';
import { Observable}  from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {

  constructor(
    private crudService: CRUDTaskListServiceService,
    private byStatutService: ByStatutTaskListServiceService
  ) {}

  getAllTasks(): Observable<Task[]> {
    return this.crudService.getTasks();
  }

  getTasksByStatus(status: TaskState){
    return this.byStatutService.getTasksByStatus(status);
  }

  createTask(task: any): Observable<Task> {
    return this.crudService.createTask(new Task(task.id, task.title, task.description, task.state, task.date));
  }

  deleteTask(task: string): Observable<void> {
    return this.crudService.deleteTask(task);
  }
}
