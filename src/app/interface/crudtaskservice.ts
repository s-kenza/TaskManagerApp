import { Task } from '../model/Task';
import {Observable} from "rxjs";
export interface CRUDTaskService {
  getTasks(): Observable<Task[]>;
  createTask(task: Task): Observable<Task>;
}
