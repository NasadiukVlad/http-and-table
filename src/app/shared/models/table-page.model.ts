export interface ITablePage {
  currentPage: number;
  size: number;
  totalElements: number;
}

export class TablePage implements ITablePage {
  public currentPage: number;
  public size: number;
  totalElements: number;
}


