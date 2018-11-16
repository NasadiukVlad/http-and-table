import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedUserGuard implements CanActivate {
  private isAppInitialized: boolean;

  constructor(private userService: UserService) {
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const currentUser = this.userService.getUser();
    if (currentUser && !this.isAppInitialized) {
      this.userService.resolveUserRoleDefaultPage(currentUser);
      this.isAppInitialized = true;
    }

    return true;
  }
}
