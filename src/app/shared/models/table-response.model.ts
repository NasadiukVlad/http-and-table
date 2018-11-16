import {IResourceData} from './resource-data.model';
import {IClientData} from './client-data.model';

export interface ITableResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IResourceData[] | IClientData[];
}

export class TableResponse implements ITableResponse {
  public data: IResourceData[] | IClientData[];
  public page: number;
  public per_page: number;
  public total: number;
  public total_pages: number;


  constructor(data: IResourceData[] | IClientData[],
              page: number, per_page: number,
              total: number, total_pages: number) {
    this.data = data;
    this.page = page;
    this.per_page = per_page;
    this.total = total;
    this.total_pages = total_pages;
  }
}

