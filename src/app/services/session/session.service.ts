import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IDecodedSession } from '@domain/model/interfaces/session-decode.interface';

/**
 * Session service
 */
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  /**
   * Receive a token and return Decoded IJwtToken Object.
   * @param token JWT token to decode
   */
  decodeJWT(token: string): IDecodedSession {
    return new JwtHelperService().decodeToken(token);
  }
  /**
   * Decodes the JWT and returns its role
   */
  getSessionType(token: string | null): string {
    if (token) {
      return this.decodeJWT(token).role;
    } else {
      return '';
    }
  }

  /**
   *  Gets the establishmentId from token
   */
  getEstablishmentID(token: string | null): string {
    if (token) {
      const establishmentId = this.decodeJWT(token).OrganizationId;
      if (establishmentId) {
        return establishmentId;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  /**
   * Gets the userId from token
   */
  getUserId(token: string | null): string {
    if (token) {
      const userId = this.decodeJWT(token).nameid;
      if (userId) {
        return userId;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
}
