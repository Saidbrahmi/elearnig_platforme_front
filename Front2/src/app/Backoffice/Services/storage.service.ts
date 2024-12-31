import { Injectable } from '@angular/core';
const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token'; // Ajoutez cette constante pour le jeton si nécessaire

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
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

  public isLoggedIn(): boolean {
    return !!window.sessionStorage.getItem(USER_KEY);
  }

  public saveToken(token: string): void {
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  getUserRole(): string {
    const user = this.getUser();
    return user.roles ? user.roles[0] : ''; // Retourne le premier rôle, ajustez si nécessaire
  }
}