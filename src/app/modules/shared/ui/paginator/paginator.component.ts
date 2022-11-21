import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * `Presentational component` for handling
 * pagination logic
 */
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  /**
   * The current page
   */
  @Input()
  currentPage: number = -1;

  /**
   * The max pages
   */
  @Input()
  totalPages: number = -1;

  /**
   * Emits a next page request
   */
  @Output()
  nextPage = new EventEmitter<void>();

  /**
   * Emits a prev page request
   */
  @Output()
  prevPage = new EventEmitter<void>();

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
  }

  /**
   * If the user is not viewing
   * the first page emits a prev
   * page request
   */
  onPrevPage(): void {
    if (this.currentPage > 1) {
      this.prevPage.emit();
    }
  }

  /**
   * If the user is not viewing
   * the last page emits a next
   * page request
   */
  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.nextPage.emit();
    }
  }

}
