import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  const returnUrl = route.url.map(u => u.path).join('/') 
  return authService.user ? true : router.createUrlTree(['/auth/login'], { queryParams: { returnUrl } })
};

