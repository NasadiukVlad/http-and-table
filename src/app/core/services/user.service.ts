import {Injectable} from '@angular/core';
import {UserRole} from '../../auth/enums/user-role.enum';
import {User} from '../../auth/models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: User;
  private usersCollection: User[] = [];

  constructor(private router: Router) {
    this.initializeUsers();
  }

  public getUser() {
    if (!localStorage.getItem('currentUser')) {
      return null;
    }
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.currentUser;
  }

  public getAllUsers() {
    return this.usersCollection;
  }

  public getUserRoles(): UserRole {
    this.getUser();
    return this.currentUser ? this.currentUser.role : null;
  }

  public resolveUserRoleDefaultPage(user: User) {
    if (user.role === UserRole.CLIENT) {
      this.router.navigate(['orders', 'list']);
    } else {
      this.router.navigate(['users', 'list']);
    }
  }

  private initializeUsers() {
    this.usersCollection.push(new User('admin', '321', UserRole.ADMIN));
  }
}

