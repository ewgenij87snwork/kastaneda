import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./containers/catalog/catalog.module').then(m => m.CatalogModule)
  }, {
    path: 'catalog',
    loadChildren: () => import('./containers/catalog/catalog.module').then(m => m.CatalogModule)
  }, {
    path: 'login',
    loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule)
  }, {
    path: 'signup',
    loadChildren: () => import('./containers/signup/signup.module').then(m => m.SignupModule)
  }, {
    path: 'admin',
    // canActivate: [ AuthGuard ],
    loadChildren: () => import('./containers/admin/admin.module').then(m => m.AdminModule)
  }, {
    path: 'director',
    // canActivate: [ AuthGuard ],
    loadChildren: () => import('./containers/director/director.module').then(m => m.DirectorModule)
  }, {
    path: 'dashboard',
    // canActivate: [ AuthGuard ],
    loadChildren: () => import('./containers/dashboard/dashboard.module').then(m => m.DashboardModule)
  }, {
    path: 'card-detail/:number',
    // canActivate: [ AuthGuard ],
    loadChildren: () => import('./containers/card-detail/card-detail.module').then(m => m.CardDetailModule)
  }, {
    path: 'users/:id',
    // canActivate: [ AuthGuard ],
    loadChildren: () => import('./containers/user-detail/user-detail.module').then(m => m.UserDetailModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
