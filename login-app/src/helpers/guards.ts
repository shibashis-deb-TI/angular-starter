import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

export const isAuthenticated: CanMatchFn = () => {
  const isLoggedIn = inject(AppService).isAuthenticated();
  const router = inject(Router);

  return isLoggedIn ? true : router.parseUrl('/login');
};

export const isAdmin: CanActivateFn = () => {
  const router = inject(Router);
  const isAdminUser = inject(AppService).isAdmin();

  return isAdminUser ? true : router.parseUrl('/login');
};
