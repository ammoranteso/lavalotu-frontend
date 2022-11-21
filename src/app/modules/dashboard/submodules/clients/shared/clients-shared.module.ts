import { NgModule } from '@angular/core';
import { CLIENTS_SHARED_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * ClientsShared Module
 */
@NgModule({
  declarations: [...CLIENTS_SHARED_COMPONENTS],
  imports: [
    SharedModule
  ],
  exports: [...CLIENTS_SHARED_COMPONENTS]
})
export class ClientsSharedModule { }
