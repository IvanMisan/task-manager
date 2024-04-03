import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../task-form/task-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { EditTaskModalComponent } from '../edit-task-modal/edit-task-modal.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, ModalModule],
  providers: [BsModalService],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks = [
    { id: crypto.randomUUID(), name: 'My tesk 1', priority: 1, complete: false }
  ]

  constructor(
    private bsModalService: BsModalService
  ) {}

  addTask(data: any) {
    this.tasks.unshift(data);
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete this?')) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }
  }

  showEditModal(task: any) {
    const options = {
      initialState: {
        task: Object.assign({}, task),
        onSaveFn: (data: any) => {
          Object.assign(task, data);
        }
      }
    }
    this.bsModalService.show(EditTaskModalComponent, options);
  }
}
