import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SharedAppModule} from '../shared/shared-app.module';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, SharedAppModule, AuthRoutingModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [AuthComponent, SignInComponent]
})
export class AuthModule {
}
