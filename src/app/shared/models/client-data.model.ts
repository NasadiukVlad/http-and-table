export interface IClientData {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export class ClientData implements IClientData {
  public avatar: string;
  public first_name: string;
  public id: number;
  public last_name: string;

  constructor(avatar: string, first_name: string,
              id: number, last_name: string) {
    this.avatar = avatar;
    this.first_name = first_name;
    this.id = id;
    this.last_name = last_name;
  }
}


