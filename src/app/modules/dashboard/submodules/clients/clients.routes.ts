import { Routes, RouterModule } from '@angular/router';
import { ClientsWrapperComponent } from './wrapper/clients-wrapper.component';
import { ClientsContainerComponent } from './pages/clients-container/clients-container.component';
import { ClientsDetailComponent } from './pages/clients-detail/clients-detail.component';
import { CLIENTS_NEW, CLIENTS_EDIT } from '@utils/constants/routes.constant';

/**
 * Clients routes
 */
const routes: Routes = [
  {
    path: '',
    component: ClientsWrapperComponent,
    children: [
      {
        path: '',
        component: ClientsContainerComponent,
      },
      {
        path: CLIENTS_NEW,
        component: ClientsDetailComponent,
      },
      {
        path: `${CLIENTS_EDIT}/:id`,
        component: ClientsDetailComponent,
      },
    ],
  },
];

/**
 * Clients routes export
 */
export const CLIENTS_ROUTES = RouterModule.forChild(routes);
