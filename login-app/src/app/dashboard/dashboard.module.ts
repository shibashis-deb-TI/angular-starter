import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './containers/dashboard-view/dashboard-view.component';
import {
  getAllEmployees,
  getLoggedInUser,
  isAdmin,
  isAuthenticated,
} from 'src/helpers';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileViewComponent } from './containers/profile-view/profile-view.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesViewComponent } from './containers/employees-view/employees-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent,
    children: [
      {
        path: 'profile/:id',
        resolve: { user: getLoggedInUser },
        component: ProfileViewComponent,
      },
      {
        path: 'employees',
        canActivate: [isAuthenticated],
        canMatch: [isAdmin],
        resolve: { users: getAllEmployees },
        component: EmployeesViewComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DashboardViewComponent,
    ProfileComponent,
    ProfileViewComponent,
    EmployeesComponent,
    EmployeesViewComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
