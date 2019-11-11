import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../../auth/models/user.model';
import {Observable, of} from 'rxjs';
import {UserService} from './user.service';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User[]> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
   return of(this.userService.getAllUsers())
      .pipe(
        delay(10000)
      );
  }
}

