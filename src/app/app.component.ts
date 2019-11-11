import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {UserService} from './core/services/user.service';
import {UserRole} from './auth/enums/user-role.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isAuthorized: boolean;
  public currentUserRole: UserRole;
  public readonly userRole = UserRole;

  constructor(private authService: AuthService,
              private userService: UserService) {}

  public onLogout() {
    this.authService.logout();
  }

  public ngOnInit(): void {
    this.searchForUser();
    this.subscribeOnLoginAction();
  }

  private searchForUser(): void {
    const currentUser = this.userService.getUser();
    if (currentUser) {
      this.currentUserRole = currentUser.role;
      this.isAuthorized = true;
    }
  }

  private subscribeOnLoginAction(): void {
    this.authService.loginAction.subscribe((authStatus: boolean) => {
      this.isAuthorized = authStatus;

      if (authStatus) {
        this.currentUserRole = this.userService.getUserRoles();
      }
    });
  }
}


