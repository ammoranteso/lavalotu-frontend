/**
 * Dedoded JWT data type
 */
export interface IDecodedSession {
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  nameid: string;
  nbf: number;
  role: string;
  OrganizationId?: string;
}
