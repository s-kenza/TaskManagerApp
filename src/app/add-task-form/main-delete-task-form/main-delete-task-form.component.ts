import { Component } from '@angular/core';
import {TaskFacade} from "../../service/taskfacade.service";

@Component({
  selector: 'app-main-delete-task-form',
  templateUrl: './main-delete-task-form.component.html',
  styleUrls: ['./main-delete-task-form.component.scss']
})
export class MainDeleteTaskFormComponent {
  taskTitle: string = '';

  constructor(private taskFacade: TaskFacade) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.taskTitle) {
      this.taskFacade.deleteTask(this.taskTitle).subscribe(() => {
        console.log(`Task with title "${this.taskTitle}" deleted successfully.`);
        // Réinitialiser le titre de la tâche après la suppression
        this.taskTitle = '';
      });
    }
  }
}
