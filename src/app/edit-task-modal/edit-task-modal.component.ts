import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-edit-task-modal',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './edit-task-modal.component.html',
  styleUrl: './edit-task-modal.component.scss'
})
export class EditTaskModalComponent {
  task: any = {};
  onSaveFn: any;

  constructor(
    public modal: BsModalRef
  ) {}
}
