import {Component} from '@angular/core';
import {IResourceData} from '../../../shared/models/resource-data.model';
import {RestService} from '../../../core/services/rest.service';
import {ITableResponse} from '../../../shared/models/table-response.model';
import {NgxTablePageModel} from '../../../shared/models/ngx-table-page.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent {
  public ngxTablePage = new NgxTablePageModel();
  public rows: IResourceData[] = [];
  public isLoading: boolean;

  constructor(private restService: RestService) {
    this.ngxTablePage.offset = 0;
    this.loadPage(this.ngxTablePage);
  }

  public loadPage(page?: NgxTablePageModel) {
    this.isLoading = true;
    this.ngxTablePage.offset = page.offset;

    this.restService.resources().resourcesList({page: page.offset + 1})
      .subscribe((response: ITableResponse) => {
        this.ngxTablePage.count = response.total;
        this.ngxTablePage.limit = response.per_page;

        this.rows = (response.data as IResourceData[]);
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
  }
}


