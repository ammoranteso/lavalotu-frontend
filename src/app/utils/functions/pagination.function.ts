import { HttpHeaders } from '@angular/common/http';
import { CURRENT_PAGE, PAGE_SIZE, TOTAL_ITEMS, TOTAL_PAGES } from '@utils/constants/header-names.constant';
import { IPageable } from '@utils/interfaces/auxiliary';

/**
 * Builds an `IPageable` object with the given
 * headers and request
 * @param items The items viewable on the current page
 * @param headers The response headers
 */
export const readPagination = <T>(items: T[] = [], headers: HttpHeaders): IPageable<T> => {
  const totalPages = headers.get(TOTAL_PAGES);
  const currentPage = headers.get(CURRENT_PAGE);
  const itemsPerPage = headers.get(PAGE_SIZE);
  const totalItems = headers.get(TOTAL_ITEMS);

  if (totalPages && currentPage && itemsPerPage && totalItems) {
    return {
      items,
      totalItems: +totalItems,
      totalPages: +totalPages,
      currentPage: +currentPage,
      itemsPerPage: +itemsPerPage
    };
  }

  const msg = 'Missing pagination headers';
  console.warn(msg);
  throw new Error(msg);
};
