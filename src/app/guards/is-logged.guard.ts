import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable( {
  providedIn: 'root'
})

export class isLoggedGuardService implements CanActivate {

  constructor(private _userService: UserService) {
  }

  canActivate(ActivatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this._userService.isUserLogged.pipe(
      map((isLogged) => {
      if (isLogged) {
        return true;
      } else {
        return false;
      }
    }))
  };
}

export const isLoggedGuardFn: CanActivateFn = (route, state) => {
  return inject(UserService).isUserLogged;
};
