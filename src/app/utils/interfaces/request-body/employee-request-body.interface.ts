/**
 * Employee request body structure
 */
export interface IEmployeeRequestBody {
  establishmentId: string;
  name: string;
  surname: string;
  role: string;
  address: string;
  phoneNumber: string;
  document: string;
  entryDate: string;
  email: string;
  password: string;
}
