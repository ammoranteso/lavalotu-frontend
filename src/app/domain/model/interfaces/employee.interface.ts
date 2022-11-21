/**
 * Employee Interface
 */
export interface IEmployee {
  id: string;
  establishmentId?: string;
  userId: string;
  name: string;
  surname: string;
  role: string;
  phoneNumber: string;
  document: string;
  email: string;
  password: string;
  address: string;
  entryDate: string;
  disabled?: boolean;
}
