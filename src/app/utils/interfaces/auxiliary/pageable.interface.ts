/**
 * Parameters for pagable
 */
export interface IPageable<T> {
  items: T[];
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}
