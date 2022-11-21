import { NgModule } from '@angular/core';
import { DIRECTIVES_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Directives Module
 */
@NgModule({
  declarations: [...DIRECTIVES_COMPONENTS],
  imports: [SharedModule],
  exports: [...DIRECTIVES_COMPONENTS],
})
export class DirectivesModule {}
