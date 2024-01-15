// authentication.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private readonly hardcodedUsername = 'admin';
  private readonly hardcodedPassword = '1234';

  // Expose the Observable part of the subject
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  // Getter method for checking the authentication status
  public get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Method to update authentication status
  public updateAuthenticationStatus(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  // Your login method
  public login(username: string, password: string): boolean {
    // Your login logic here, return true if successful, false otherwise
    const isAuthenticated = this.checkCredentials(username, password);
    this.updateAuthenticationStatus(isAuthenticated);
    return isAuthenticated;
  }

  // Your logout method
  public logout(): void {
    // Your logout logic here
    this.updateAuthenticationStatus(false);
  }

  // Check credentials (simple demonstration, replace with secure server-side authentication)
  private checkCredentials(username: string, password: string): boolean {
    return username === this.hardcodedUsername && password === this.hardcodedPassword;
  }
}
