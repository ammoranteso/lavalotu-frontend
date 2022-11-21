import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IMaterial } from '@domain/model/interfaces/material.interface';
import {
  CreateExpenseModalComponent,
  MaterialsModalComponent,
} from '@modules/modals';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
/**
 * SERVICE: Manages the modal in the app
 */
@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  constructor(private readonly dialog: MatDialog) {}
  /**
   * Shows modal
   */
  showMaterialsModal(
    materials$: Observable<IFacadeApiMap<IMaterial[]>>,
    selectedMaterials: IMaterial[]
  ): MatDialogRef<MaterialsModalComponent> {
    return this.dialog.open(MaterialsModalComponent, {
      panelClass: 'app-modal',
      data: { materials$, selectedMaterials },
    });
  }

  /**
   * Shows the add expense modal
   */
  showCreateExpenseModal(): MatDialogRef<CreateExpenseModalComponent> {
    return this.dialog.open(CreateExpenseModalComponent, {
      panelClass: 'app-modal-transparent',
    });
  }
}
