export interface IAuthData {
  email: string;
  password: string;
}

export class AuthData implements IAuthData {
  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

