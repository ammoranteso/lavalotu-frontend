/**
 * Establishment type
 */
export interface IEstablishment {
  establishmentName: string;
  address: string;
  phoneNumber: string;
  optionalPhoneNumber?: string;
  email: string;
  neighborhood: string;
  isPlant: boolean;
  id: string;
  createdAt?: string;
}
