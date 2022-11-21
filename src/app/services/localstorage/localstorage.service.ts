import { Injectable } from '@angular/core';
/**
 * Service used to manage localstorage
 */
@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  /**
   * Set JWT Auth Token on localstorage.
   * @param token Value of Token
   */
  setToken(token: string | null): void {
    if (token) {
      localStorage.setItem('token', token);
    }
  }

  /**
   * Set RefreshToken value on localstorage.
   * @param token Value of refreshToken
   */
  setRefreshToken(token: string | null): void {
    if (token) {
      localStorage.setItem('refreshToken', token);
    }
  }

  /**
   * Saves the id of the selected establishment
   */
  setEstablishmentId(id: string): void {
    localStorage.setItem('establishmentId', id);
  }

  /**
   * Get the token
   */
  get token(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Get the refresh token
   */
  get refreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  /**
   * Get the saved establishmentId
   */
  get establishmentId(): string | null {
    return localStorage.getItem('establishmentId');
  }
}
