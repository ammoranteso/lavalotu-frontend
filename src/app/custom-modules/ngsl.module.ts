import { NgModule } from '@angular/core';
import { NgslSelectModule, NgslAsyncHandlerModule } from '@ngsl/components';

/**
 * Ngsl modules to import
 */
const modules = [
  NgslSelectModule,
  NgslAsyncHandlerModule
];

/**
 * Ngsl Module
 */
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class NgslModule { }
