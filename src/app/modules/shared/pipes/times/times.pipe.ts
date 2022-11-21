import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns an iterator from a given number
 */
@Pipe({
  name: 'times',
})
export class TimesPipe implements PipeTransform {
  // tslint:disable-next-line: completed-docs
  transform(value: number): any {
    const iterable = {} as Iterable<any>;
    iterable[Symbol.iterator] = function* () {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterable;
  }
}
