import {UserRole} from '../enums/user-role.enum';

interface IUser {
  username: string;
  password: string;
  role: UserRole;
  token: string;
}

export class User implements IUser {
  public username: string;
  public password: string;
  public role: UserRole;
  public token: string;


  constructor
  (username: string,
   password: string,
   role: UserRole,
   token?: string) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.token = token;
  }
}


