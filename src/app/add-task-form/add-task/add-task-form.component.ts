import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskFacade } from "../../service/taskfacade.service";

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {
  states = ['En cours', 'A faire', 'Terminée'];
  submitted = false;


  taskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    state: ['', Validators.required],
    date: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private taskFacade: TaskFacade) { }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;

    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      console.warn(newTask);
      this.taskFacade.createTask(newTask);
    }
  }

}
