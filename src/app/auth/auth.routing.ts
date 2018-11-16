import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {SignInComponent} from './components/sign-in/sign-in.component';

const AUTH_ROUTES: Routes = [
  {
    path: '', component: AuthComponent, children: [
    {path: '', redirectTo: 'sign-in'},
    {path: 'sign-in', component: SignInComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRouting {
}




