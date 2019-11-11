import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserRoutingModule} from './user-routing.module';
import {UsersListComponent} from './components/users-list/users-list.component';
import {SharedAppModule} from '../shared/shared-app.module';

@NgModule({
  imports: [
    CommonModule, UserRoutingModule, SharedAppModule
  ],
  declarations: [
    UserComponent,
    UsersListComponent
  ]
})
export class UserModule {
}
