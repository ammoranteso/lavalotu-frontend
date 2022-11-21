/**
 * Establishment type
 */
export interface IExpense {
  id?: string;
  createdAt?: string;
  name: string;
  observation: string;
  value: number;
  establishmentId: string;
  employeeUserId: string;
}
