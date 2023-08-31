import { TestBed } from '@angular/core/testing';
import { CRUDTaskListServiceService } from './crudtask-list-service.service';
import { Task, TaskState } from '../model/Task';
import { TaskList } from '../model/TaskList';

describe('CRUDTaskListServiceService', () => {
  let service: CRUDTaskListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDTaskListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tasks', (done) => {
    service.getTasks().subscribe((tasks) => {
      expect(tasks.length).toBe(3);
      done();
    });
  });

  it('should create task', (done) => {
    const newTask = new Task(4, 'Nouvelle tâche', 'Description de la nouvelle tâche', TaskState.A_FAIRE, '2021-01-04');
    service.createTask(newTask).subscribe((task) => {
      expect(task).toEqual(newTask);
      done();
    });
  });

  it('should delete task', (done) => {
    const taskTitle = 'Tâche 1';
    service.deleteTask(taskTitle).subscribe(() => {
      service.getTasks().subscribe((tasks) => {
        const foundTask = tasks.find((task) => task.title === taskTitle);
        expect(foundTask).toBeFalsy();
        done();
      });
    });
  });

  it('should return undefined when trying to delete non-existent task', (done) => {
    const nonExistentTaskTitle = 'Non Existent Task';
    service.deleteTask(nonExistentTaskTitle).subscribe(() => {
      done();
    });
  });
});
