import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { CompanyProfile } from './about/company-profile/company-profile';
import { OwnerProfile } from './about/owner-profile/owner-profile';

export const routes: Routes = [
  {
    path: '',
    component: Home,
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
];
