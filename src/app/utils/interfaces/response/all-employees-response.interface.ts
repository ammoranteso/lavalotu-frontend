/**
 * Get All employees interface
 */
export interface IAllEmployeesResponse {
  id: string;
  name: string;
  surname: string;
  phoneNumber: string;
  document: string;
  userId: string;
  establishmentId: string;
  disabled?: boolean;
  entryDate: Date;
  address: string;
}
