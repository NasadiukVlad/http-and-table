import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router,
              private userService: UserService) {
  }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): | boolean | UrlTree {
    if (this.userService.getUser()) {
      return true;
    }
    return this.router.createUrlTree(['/auth']);
  }

  public canLoad(route: Route,
                 segments: UrlSegment[]): boolean {
    if (this.userService.getUser()) {
      return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }
}


