import { NgModule } from '@angular/core';
import { SharedModule } from '@custom-modules/shared.module';
import { UI_COMPONENTS } from '.';

/**
 * Ui Module
 */
@NgModule({
  declarations: [...UI_COMPONENTS],
  imports: [
    SharedModule
  ],
  exports: [...UI_COMPONENTS]
})
export class UiModule { }
