import { NgModule } from '@angular/core';
import { CLIENTS_ROUTES } from './clients.routes';
import { CLIENTS_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { UiModule } from '@modules/shared/ui/ui.module';

/**
 * Clients Module
 */
@NgModule({
  declarations: [...CLIENTS_COMPONENTS],
  imports: [UiModule, SharedModule, CLIENTS_ROUTES],
})
export class ClientsModule {}
