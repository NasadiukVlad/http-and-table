import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from '../core/guards/away.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent  implements ComponentCanDeactivate {

  public canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    return confirm('Are you sure you want to navigate?');
  }
}
