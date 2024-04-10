import { ResolveFn } from '@angular/router';

export const petsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
