import { Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'client-project',
    component: ClientProjectComponent
  }
];
