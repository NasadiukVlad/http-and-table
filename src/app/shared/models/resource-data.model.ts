export interface IResourceData {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export class ResourceData implements IResourceData {
  public color: string;
  public id: number;
  public name: string;
  public pantone_value: string;
  public year: number;


  constructor(color: string, id: number,
              name: string, pantone_value: string,
              year: number) {
    this.color = color;
    this.id = id;
    this.name = name;
    this.pantone_value = pantone_value;
    this.year = year;
  }
}


