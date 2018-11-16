import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/components/home/home.component';
import {AuthGuard} from './core/guards/auth.guard';
import {AdminGuard} from './core/guards/admin.guard';
import {AuthorizedUserGuard} from './core/guards/authorized-user.guard';


const ROUTES: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orders', loadChildren: 'app/order/order.module#OrderModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'users', loadChildren: 'app/user/user.module#UserModule',
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule',
    canActivate: [AuthorizedUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


