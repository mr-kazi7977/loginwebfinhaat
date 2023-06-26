import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private jwtHelper:JwtHelperService) { }
  signOut(): void {
    window.sessionStorage.clear();
  }
  public save(key: string,value:any): void {
    window.sessionStorage.removeItem(key);
    window.sessionStorage.setItem(key, value);
  }
  public remove(key: string): void {
    window.sessionStorage.removeItem(key);
   
  }
  public get(key: string): any | null {
    return window.sessionStorage.getItem(key);
  }


  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public removeToken(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
   
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public isAuthenticated(): boolean {
  
        return !this.jwtHelper.isTokenExpired(this.getToken());
    
}

}