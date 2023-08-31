import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskFacade} from "../../service/taskfacade.service";

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {
  deleteForm: FormGroup;

  constructor(private fb: FormBuilder, private taskFacade: TaskFacade) {
    this.deleteForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.deleteForm.valid) {
      const title = this.deleteForm.value.title;
      console.warn('Task to be deleted:', title);
      this.taskFacade.deleteTask(title);
    }
  }

}
