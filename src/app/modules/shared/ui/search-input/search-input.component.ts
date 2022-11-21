import { Component, Input, EventEmitter, OnDestroy, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SubSink } from 'subsink';

/**
 * `Dumb component` for handling contextual search
 * queries
 */
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  /**
   * Subsink handler
   */
  subSink = new SubSink();

  /**
   * The search input placeholder
   */
  @Input()
  placeholder: string = 'Buscar';

  /**
   * The input debounce time
   */
  @Input()
  debounceTime: number = 300;

  /**
   * Query change emitter
   */
  @Output()
  queryChange = new EventEmitter<string>();

  /**
   * Search form control
   */
  valueControl = new FormControl();

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.subSink.sink = this.valueControl.valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe(val => { this.queryChange.emit(val); });
  }

  // tslint:disable-next-line: completed-docs
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
