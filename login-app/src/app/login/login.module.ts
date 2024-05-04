import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninFormComponent } from './components';

import { SigninComponent } from './containers';

const routes: Routes = [{ path: '', component: SigninComponent }];

@NgModule({
  declarations: [SigninFormComponent, SigninComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
