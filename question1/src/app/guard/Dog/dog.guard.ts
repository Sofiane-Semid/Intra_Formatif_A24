import { CanActivateFn } from '@angular/router';

export const dogGuard: CanActivateFn = (route, state) => {
  return true;
};
