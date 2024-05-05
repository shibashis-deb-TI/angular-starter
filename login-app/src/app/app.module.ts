import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { isAuthenticated } from 'src/guards';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login').then((module) => module.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup').then((module) => module.SignupModule),
  },
  {
    path: 'dashboard',
    canActivate: [isAuthenticated],
    loadChildren: () =>
      import('./dashboard').then((module) => module.DashboardModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  declarations: [AppComponent],
  providers: [AppService],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
