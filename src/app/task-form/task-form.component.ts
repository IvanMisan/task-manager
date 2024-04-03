import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  @Output() onSave = new EventEmitter<any>();
  @Input() task: any = {};
  priorities = [1, 2, 3, 4, 5];

  onSubmit() {
    this.task.id = crypto.randomUUID();
    this.onSave.emit(this.task);
    this.task = {};
  }
}
