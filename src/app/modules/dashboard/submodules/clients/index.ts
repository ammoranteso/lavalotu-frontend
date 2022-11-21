import { ClientsDetailComponent } from './pages/clients-detail/clients-detail.component';
import { ClientsContainerComponent } from './pages/clients-container/clients-container.component';
import { ClientsWrapperComponent } from './wrapper/clients-wrapper.component';

/**
 * Clients components
 */
export const CLIENTS_COMPONENTS: any[] = [
  ClientsWrapperComponent,
  ClientsContainerComponent,
  ClientsDetailComponent,
];
/**
 * Components
 */

export * from './wrapper/clients-wrapper.component';
export * from './pages/clients-container/clients-container.component';
export * from './pages/clients-detail/clients-detail.component';
