import {Component, OnInit} from '@angular/core';
import {ITablePage, TablePage} from '../../../shared/models/table-page.model';
import {IResourceData} from '../../../shared/models/resource-data.model';
import {RestService} from '../../../core/services/rest.service';
import {ITableResponse} from '../../../shared/models/table-response.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  public tablePage = new TablePage();
  public rows: IResourceData[] = [];
  public isLoading: boolean;

  constructor(private restService: RestService) {
    this.tablePage.currentPage = 0;
  }

  public ngOnInit() {
    this.setPage({offset: 0});
  }

  public setPage(pageInfo) {
    this.isLoading = true;
    this.tablePage.currentPage = pageInfo.offset;

    this.restService.resources().resourcesList({page: pageInfo.offset + 1})
      .subscribe((response: ITableResponse) => {
        this.tablePage.totalElements = response.total_pages;
        this.tablePage.size = response.per_page;

        this.rows = (response.data as IResourceData[]);
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
  }
}


