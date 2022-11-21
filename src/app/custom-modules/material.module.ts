import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

/**
 * Array with all Material modules
 */
const modules: any[] = [
  MatDialogModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatTabsModule,
  MatRadioModule,
  MatFormFieldModule,
];

/**
 * Module that exports all Material modules to be
 * used in any app module by import declaration.
 */
@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [],
  providers: [],
})
export class MaterialModule {}
