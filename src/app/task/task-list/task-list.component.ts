import {Component} from '@angular/core';
import {Task, TaskState} from '../../model/Task';
import {TaskFacade} from "../../service/taskfacade.service";
import {TaskList} from "../../model/TaskList";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];
  tasksByStatus: TaskList = new TaskList([]);
  archivedTasks: TaskList = new TaskList([]);
  taskSubscription: Subscription = new Subscription();
  taskByStatusSubscription: Subscription = new Subscription();

  constructor(private taskFacade: TaskFacade) { }

  ngOnInit(): void {
    this.taskFacade.getAllTasks().subscribe((tasks: Task[]) => { this.tasks = tasks; });

    this.taskByStatusSubscription = this.taskFacade.getTasksByStatus(TaskState.EN_COURS).subscribe((rep) => {
      this.tasksByStatus = rep;
    });

    this.taskFacade.getTasksByStatus(TaskState.TERMINEE).subscribe((rep) => {
      this.archivedTasks = rep;
    });
  }

  ngOnDestroy(): void {
    this.taskSubscription.unsubscribe();
    this.taskByStatusSubscription.unsubscribe();
  }

}
