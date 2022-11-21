import { NgModule } from '@angular/core';
import { LANDING_ROUTES } from './landing.routes';
import { LANDING_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { MaterialModule } from '@custom-modules/material.module';
import { UiModule } from '@modules/shared/ui/ui.module';

/**
 * Landing Module
 */
@NgModule({
  declarations: [...LANDING_COMPONENTS],
  imports: [SharedModule, MaterialModule, LANDING_ROUTES, UiModule],
})
export class LandingModule {}
