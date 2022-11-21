import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { NgslModule } from './ngsl.module';

/**
 * Sharable modules
 */
const modules: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgslModule,
  MaterialModule,
];

/**
 * Imports and exports all the most common modules
 * used accross the whole application
 */
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule { }
