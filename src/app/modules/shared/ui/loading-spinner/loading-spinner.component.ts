import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '@domain/application/observable-services';
/**
 * Spinner shown when loading.
 */
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  /**
   * @var showSpinner$ used to show or hide the spinner if something is loading.
   */
  showSpinner$!: Observable<boolean>;

  constructor(private readonly dataService: DataService) {}

  /**
   * Changes the state of the component
   */
  ngOnInit(): void {
    this.showSpinner$ = this.dataService.getSpinnerState$();
  }
}
