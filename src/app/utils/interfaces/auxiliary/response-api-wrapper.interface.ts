/**
 * TODO: Document IResponseApiWrapper purpose
 */
export interface IResponseApiWrapper<T> {
  data?: T;
  code: number;
  codeName: string;
}
