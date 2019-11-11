import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.userService.getUser()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.getUser().token}`
        }
      });
    }

    return next.handle(request);
  }
}



