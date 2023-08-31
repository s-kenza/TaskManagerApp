import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskFacade } from '../../service/taskfacade.service';
import { TaskState, Task } from '../../model/Task';
import { TaskList } from '../../model/TaskList';
import { of } from 'rxjs';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let mockTaskFacade: jasmine.SpyObj<TaskFacade>;

  beforeEach(() => {
    mockTaskFacade = jasmine.createSpyObj<TaskFacade>('TaskFacade', ['getAllTasks', 'getTasksByStatus']);

    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      providers: [{ provide: TaskFacade, useValue: mockTaskFacade }],
    });

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate tasks from taskFacade', () => {
    const mockTasks: Task[] = [
      new Task(1, 'Task 1', 'Description 1', TaskState.A_FAIRE, '2023-08-28'),
      new Task(2, 'Task 2', 'Description 2', TaskState.EN_COURS, '2023-08-29'),
    ];

    mockTaskFacade.getAllTasks.and.returnValue(of(mockTasks));
    fixture.detectChanges();

    expect(component.tasks).toEqual(mockTasks);
  });

  it('should populate tasksByStatus from taskFacade', () => {
    const mockTasksByStatus: TaskList = new TaskList([
      new Task(2, 'Task 2', 'Description 2', TaskState.EN_COURS, '2023-08-29'),
    ]);

    mockTaskFacade.getTasksByStatus.and.returnValue(of(mockTasksByStatus));
    fixture.detectChanges();

    expect(component.tasksByStatus).toEqual(mockTasksByStatus);
  });

  it('should populate archivedTasks from taskFacade', () => {
    const mockArchivedTasks: TaskList = new TaskList([
      new Task(3, 'Task 3', 'Description 3', TaskState.TERMINEE, '2023-08-30'),
    ]);

    mockTaskFacade.getTasksByStatus.and.returnValue(of(mockArchivedTasks));
    fixture.detectChanges();

    expect(component.archivedTasks).toEqual(mockArchivedTasks);
  });

  afterEach(() => {
    fixture.destroy();
  });
});
