import { CanActivateFn } from '@angular/router';

export const catGuard: CanActivateFn = (route, state) => {
  return true;
};
