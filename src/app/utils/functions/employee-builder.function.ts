import { IEmployee } from '@domain/model/interfaces';

/**
 * Tells if an object is a Branch
 * @param obj The object to evaluate
 */
const isAEmployee = (obj: unknown): obj is IEmployee => {
  if (typeof obj === 'object' && obj) {
    const isEmployee = obj.hasOwnProperty('name') && obj.hasOwnProperty('document');
    if (!isEmployee) {
      console.warn('The obj is not a Employee, empty object will be returned instead');
    }
    return isEmployee;
  }
  return false;
};

/**
 * Builds a brach object
 * @param EmployeeData The Employee data
 */
export const buildEmployee = (EmployeeData: unknown): IEmployee => {
  if (isAEmployee(EmployeeData)) {
    return EmployeeData;
  }
  return {} as IEmployee;
};
