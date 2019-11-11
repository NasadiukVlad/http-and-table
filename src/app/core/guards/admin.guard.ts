import {Injectable} from '@angular/core';
import {
  CanLoad,
  Route,
  Router,
  UrlSegment
} from '@angular/router';
import {UserService} from '../services/user.service';
import {UserRole} from '../../auth/enums/user-role.enum';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  constructor(private router: Router,
              private userService: UserService,
              private authService: AuthService) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this.userService.getUserRoles() === UserRole.ADMIN) {
      return true;
    }

    this.authService.logout();
    return false;
  }
}


