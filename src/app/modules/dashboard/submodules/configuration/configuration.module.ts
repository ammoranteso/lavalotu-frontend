import { NgModule } from '@angular/core';
import { CONFIGURATION_ROUTES } from './configuration.routes';
import { CONFIGURATION_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { UiModule } from '@modules/shared/ui/ui.module';
import { NgslAsyncHandlerModule } from '@ngsl/components';
import {
  ClothesFacade,
  LaundryServicesFacade,
  MaterialsFacade,
} from '@domain/application/facade';
import { PipesModule } from '@modules/shared/pipes/pipes.module';
import { ModalsModule } from '@modules/modals/modals.module';
import { DirectivesModule } from 'directives/directives.module';

/**
 * Configuration Module
 */
@NgModule({
  declarations: [...CONFIGURATION_COMPONENTS],
  imports: [
    NgslAsyncHandlerModule,
    SharedModule,
    UiModule,
    PipesModule,
    ModalsModule,
    DirectivesModule,
    CONFIGURATION_ROUTES,
  ],
})
export class ConfigurationModule {
  constructor(
    private readonly clotheFacade: ClothesFacade,
    private readonly laundryServicesFacade: LaundryServicesFacade,
    private readonly materialsFacade: MaterialsFacade
  ) {
    this.clotheFacade.getAllClothes();
    this.materialsFacade.getAllMaterials();
    this.laundryServicesFacade.getAllServices();
  }
}
