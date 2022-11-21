import { Routes, RouterModule } from '@angular/router';
import {
  CONFIGURATION_SERVICES,
  CONFIGURATION_ESTABLISHMENT_ALL,
  CONFIGURATION_ESTABLISHMENT,
  CONFIGURATION_ESTABLISHMENT_CREATE,
} from '@utils/constants/routes.constant';
import { AllEstablishmentsComponent } from './pages/all-establishments/all-establishments.component';
import { CreateEstablishmentComponent } from './pages/create-establishment/create-establishment.component';
import { EstablishmentComponent } from './pages/establishment/establishment.component';
import { LaundryServicesComponent } from './pages/laundry-services/laundry-services.component';
import { ConfigurationWrapperComponent } from './wrapper/configuration-wrapper.component';

/**
 * Configuration routes
 */
const routes: Routes = [
  {
    path: '',
    component: ConfigurationWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: CONFIGURATION_ESTABLISHMENT_ALL,
        pathMatch: 'full',
      },
      {
        path: CONFIGURATION_ESTABLISHMENT_ALL,
        component: AllEstablishmentsComponent,
      },
      {
        path: CONFIGURATION_SERVICES,
        component: LaundryServicesComponent,
      },
      {
        path: CONFIGURATION_ESTABLISHMENT,
        component: EstablishmentComponent,
      },
      {
        path: CONFIGURATION_ESTABLISHMENT_CREATE,
        component: CreateEstablishmentComponent,
      },
    ],
  },
];

/**
 * Configuration routes export
 */
export const CONFIGURATION_ROUTES = RouterModule.forChild(routes);
