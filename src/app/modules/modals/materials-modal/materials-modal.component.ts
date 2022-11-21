import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMaterial } from '@domain/model/interfaces/material.interface';
import { addItemArray } from '@utils/functions/add-item-array.function';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';

/**
 * DUMB: Modal component
 */
@Component({
  selector: 'app-materials-modal',
  templateUrl: './materials-modal.component.html',
  styleUrls: ['./materials-modal.component.scss'],
})
export class MaterialsModalComponent implements OnInit {
  /**
   * Materials to display
   */
  public materials$!: Observable<IFacadeApiMap<IMaterial[]>>;

  /**
   * Materials already selected
   */
  public selectedMaterialsAux: IMaterial[] = this.data.selectedMaterials;

  constructor(
    public readonly dialogRef: MatDialogRef<MaterialsModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: {
      materials$: Observable<IFacadeApiMap<IMaterial[]>>;
      selectedMaterials: IMaterial[];
    }
  ) {
    dialogRef.disableClose = true;
  }

  /**
   * Adds a clothe to the list of checked ones
   * @param Clothe item to add
   */
  addItemToArray(e: IMaterial, array: IMaterial[]): void {
    addItemArray(e, array);
    // console.log(array);
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.materials$ = this.data.materials$;
  }

  /**
   * Confirms the selections chosen by the user
   */
  confirmPicks(): void {
    if (this.selectedMaterialsAux.length > 0) {
      this.dialogRef.close(this.selectedMaterialsAux);
    }
  }
}
