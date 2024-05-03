import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './containers/signup/signup.component';
import { SignupFormComponent } from './components';
import { SignupService } from './services';

const routes: Routes = [{ path: '', component: SignupComponent }];

@NgModule({
  declarations: [SignupComponent, SignupFormComponent],
  providers: [SignupService],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class SignupModule {}
