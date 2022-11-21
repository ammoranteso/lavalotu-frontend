import { NgModule } from '@angular/core';
import { MODALS_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { NgslAsyncHandlerModule } from '@ngsl/components';
import { UiModule } from '@modules/shared/ui/ui.module';
import { MatDialogModule } from '@angular/material/dialog';
/**
 * Modals Module
 */
@NgModule({
  declarations: [...MODALS_COMPONENTS],
  imports: [SharedModule, NgslAsyncHandlerModule, UiModule, MatDialogModule],
  exports: [...MODALS_COMPONENTS],
})
export class ModalsModule {}
