import {IResourceData} from './resource-data.model';
import {IClientData} from './client-data.model';

export interface ITableResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IResourceData[] | IClientData[];
}



