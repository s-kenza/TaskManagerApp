import { CRUDTaskService } from "./crudtaskservice";
import { Task, TaskState } from "../model/Task";
import {Observable} from "rxjs";
import {TaskList} from "../model/TaskList";

export interface ByStatutTaskService extends CRUDTaskService {
  getTasksByStatus(status: TaskState): Observable<TaskList>;
}
