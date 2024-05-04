import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './containers/dashboard-view/dashboard-view.component';
import { isAdmin, isAuthenticated } from 'src/guards';

const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent,
    children: [
      { path: 'profile', component: DashboardViewComponent },
      {
        path: 'employees',
        canActivate: [isAuthenticated],
        canMatch: [isAdmin],
        component: DashboardViewComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, DashboardViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
