import {Component} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {UserService} from './core/services/user.service';
import {UserRole} from './auth/enums/user-role.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isAuthorized: boolean;
  public currentUserRole: UserRole;
  public userRole = UserRole;

  constructor(private authService: AuthService,
              private userService: UserService) {

    const currentUser = this.userService.getUser();
    if (currentUser) {
      this.currentUserRole = currentUser.role;
      this.isAuthorized = true;
    }

    this.authService.loginEventEmitter.subscribe((authStatus: boolean) => {
      this.isAuthorized = authStatus;

      if (authStatus) {
        this.currentUserRole = this.userService.getUserRoles();
      }
    });
  }

  public onLogout() {
    this.authService.logout();
  }
}


