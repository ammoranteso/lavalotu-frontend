/**
 * Adds item to array and filters it
 * @param arr: Array to filter
 */
export const addItemArray = (e: any, array: any[]): void => {
  const index = array.indexOf(e);
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    array.push(e);
  }
};
