import { NgModule } from '@angular/core';
import { PIPES_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Pipes Module
 */
@NgModule({
  declarations: [...PIPES_COMPONENTS],
  imports: [SharedModule],
  exports: [...PIPES_COMPONENTS],
})
export class PipesModule {}
