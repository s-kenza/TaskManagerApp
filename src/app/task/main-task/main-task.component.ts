import { Component, OnInit } from '@angular/core';
import { Task, TaskState } from '../../model/Task';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent implements OnInit {

  task!: Task;

  constructor() {}

  ngOnInit(): void {
    this.task = new Task(
      1,
      'Tâche principale',
      'Ceci est la description de la tâche principale',
      TaskState.EN_COURS,
      "2021-01-01"
    );
  }

}
