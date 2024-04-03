import { Routes } from '@angular/router';

export const routes: Routes = [];
import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: '**', redirectTo: '/tasks', pathMatch: 'full' },
];
