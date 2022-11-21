import { CreateEstablishmentComponent } from './pages/create-establishment/create-establishment.component';
import { AllEstablishmentsComponent } from './pages/all-establishments/all-establishments.component';
import { EstablishmentComponent } from './pages/establishment/establishment.component';
import { LaundryServicesComponent } from './pages/laundry-services/laundry-services.component';
import { ConfigurationWrapperComponent } from './wrapper/configuration-wrapper.component';
import { InputServicesTableComponent } from './pages/laundry-services/ui/input-services-table/input-services-table.component';
import { ClotheRowComponent } from './pages/laundry-services/ui/clothe-row/clothe-row.component';
import { MaterialServicePriceComponent } from './pages/laundry-services/ui/material-service-price/material-service-price.component';

/**
 * Configuration components
 */
export const CONFIGURATION_COMPONENTS: any[] = [
  ConfigurationWrapperComponent,
  LaundryServicesComponent,
  EstablishmentComponent,
  AllEstablishmentsComponent,
  CreateEstablishmentComponent,
  InputServicesTableComponent,
  ClotheRowComponent,
  MaterialServicePriceComponent,
];

/**
 * Components
 */

export * from './wrapper/configuration-wrapper.component';
export * from './pages/laundry-services/laundry-services.component';
export * from './pages/establishment/establishment.component';
export * from './pages/all-establishments/all-establishments.component';
export * from './pages/create-establishment/create-establishment.component';
export * from './pages/laundry-services/ui/input-services-table/input-services-table.component';
export * from './pages/laundry-services/ui/clothe-row/clothe-row.component';
export * from './pages/laundry-services/ui/material-service-price/material-service-price.component';
