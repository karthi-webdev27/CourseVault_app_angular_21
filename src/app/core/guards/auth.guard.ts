import { CanActivateFn, Router } from '@angular/router';
import { GlobalConstant } from '../constants/Global.constant';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const localData = localStorage.getItem(GlobalConstant.LOGIN_KEY);
  if (localData != null) {
    return true;
  } else {
    alert('Unauthorised Usage');
    return false;
  }
};
