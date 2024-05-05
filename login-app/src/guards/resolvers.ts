import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/types';

export const getLoggedInUser: ResolveFn<User> = (
  route: ActivatedRouteSnapshot
) => {
  const id = route.paramMap.get('id');

  if (!id) {
    inject(Router).navigate(['dashboard']);
  }

  // 😅 Seems safe to use non null since navigation handles unauthorized navigation!
  return inject(AppService).loggedInUser(id!);
};

export const getAllEmployees: ResolveFn<User[]> = () =>
  inject(AppService).getUsers();
