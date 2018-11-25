import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgxLoadingModule} from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgxDatatableModule, NgxLoadingModule],
  declarations: []
})
export class SharedAppModule {}
