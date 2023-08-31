import { Injectable } from '@angular/core';
import { Task, TaskState } from "../model/Task";
import { TaskList } from "../model/TaskList";
import { CRUDTaskService } from "../interface/crudtaskservice";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListServiceService implements CRUDTaskService{
  protected taskList: TaskList;

  constructor() {
    this.taskList = new TaskList([
      new Task( 1, 'Tâche 1', 'Ceci est la description de la tâche 1', TaskState.A_FAIRE, "2021-01-01"),
      new Task( 2,'Tâche 2', 'Ceci est la description de la tâche 2', TaskState.EN_COURS, "2021-01-02"),
      new Task( 3,'Tâche 3', 'Ceci est la description de la tâche 3', TaskState.TERMINEE, "2021-01-03"),
    ]);
  }

  getTasks(): Observable<Task[]> {
    return of(this.taskList.tasks);
  }

  createTask(task: Task): Observable<Task> {
    this.taskList.tasks.push(task);
    return of(task);
  }

  deleteTask(taskTitle: string): Observable<void> {
    const index = this.taskList.tasks.findIndex(task => task.title === taskTitle);
    if (index !== -1) {
      this.taskList.tasks.splice(index, 1);
      return of();
    } else {
      return of();
    }
  }
}
