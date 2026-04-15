import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { CompanyProfile } from './about/company-profile/company-profile';
import { OwnerProfile } from './about/owner-profile/owner-profile';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';
import { Product } from './product/product';
import { Users } from './users/users';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
  {
    path: '',
    component: Home,
  },
  {
    path: 'product/:id',
    component: Product,
  },
  {
    path: 'users',
    component: Users,
  },
  {
    path: 'about',
    component: About,
    children: [
      {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full',
      },
      {
        path: 'company',
        component: CompanyProfile,
      },
      {
        path: 'owner',
        component: OwnerProfile,
      },
    ],
  },
  {
    path: 'contact',
    // component: Contact,
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
  {
    path: 'counter',
    // component: Contact,
    loadComponent: () => import('./counter-app/counter-app').then((m) => m.CounterApp),
  },
  //   Page not found should always be at last
  {
    path: '**',
    loadComponent: () => import('./not-found-page/not-found-page').then((m) => m.NotFoundPage),
  },
];
