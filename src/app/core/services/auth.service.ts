import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../../auth/models/user.model';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {AuthData} from '../../auth/models/auth-data.model';
import {RestService} from './rest.service';
import {UserRole} from '../../auth/enums/user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginEventEmitter = new EventEmitter<boolean>();

  constructor(private userService: UserService,
              private router: Router,
              private restService: RestService) {
  }

  public login(username: string, password: string) {
    const authData = new AuthData(username, password);

    const currentUser: User = this.userService.getAllUsers()
      .find(((user: User) => user.username === username && user.password === password));

    if (currentUser) {
      localStorage.setItem('currentUser',
        JSON.stringify(currentUser));
      this.loginEventEmitter.emit(true);
      this.userService.resolveUserRoleDefaultPage(currentUser);
    } else {
      this.restService
        .auth().login(authData).subscribe(
        (response) => {
          const user = new User(
            username, password,
            UserRole.CLIENT,
            response.token,
          );

          if (response.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate(['orders']);

            this.loginEventEmitter.emit(true);
          }
        },
        (error) => {
          alert(error);
        },
      );
    }
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
    this.loginEventEmitter.emit(false);
  }
}

