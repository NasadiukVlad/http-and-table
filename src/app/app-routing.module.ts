import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/components/home/home.component';
import {AuthGuard} from './core/guards/auth.guard';
import {AdminGuard} from './core/guards/admin.guard';
import {AuthorizedUserGuard} from './core/guards/authorized-user.guard';
import {UserResolverService} from './core/services/user-resolver.service';

const ROUTES: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard],
    resolve: {
      allUsers: UserResolverService
    }
  },
  {
    path: 'orders',
    loadChildren: () => import('app/order/order.module').then(m => m.OrderModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () => import('app/user/user.module').then(m => m.UserModule),
    canLoad: [AuthGuard, AdminGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('app/auth/auth.module').then(m => m.AuthModule),
    canLoad: [AuthorizedUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


