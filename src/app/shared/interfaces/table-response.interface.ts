import {IResourceData} from './resource-data.interface';
import {IClientData} from './client-data.interface';

export interface ITableResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IResourceData[] | IClientData[];
}



