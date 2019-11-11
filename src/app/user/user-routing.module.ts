import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {UsersListComponent} from './components/users-list/users-list.component';

const USER_CHILD_ROUTES: Routes = [
  {
    path: '', component: UserComponent, children: [
      {path: '', redirectTo: 'list'},
      {path: 'list', component: UsersListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(USER_CHILD_ROUTES)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}




