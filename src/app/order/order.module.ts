import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderComponent} from './order.component';
import {OrderRoutingModule} from './order-routing.module';
import {OrdersListComponent} from './components/orders-list/orders-list.component';
import {SharedAppModule} from '../shared/shared-app.module';

@NgModule({
  imports: [CommonModule, OrderRoutingModule, SharedAppModule],
  declarations: [OrderComponent, OrdersListComponent]
})
export class OrderModule {
}


