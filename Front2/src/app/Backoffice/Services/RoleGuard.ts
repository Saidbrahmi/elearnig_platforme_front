import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: StorageService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const expectedRole = next.data['role'];
      const currentRole = this.authService.getUserRole();

      if (currentRole === expectedRole || currentRole === 'ROLE_ADMIN') {
        if (currentRole === 'ROLE_STUDENT') {
          // Redirection vers AllTemplateFrontComponent si le rôle est 'ROLE_STUDENT'
          return this.router.parseUrl('/all-template-front');
        }
        // Accès autorisé pour ROLE_ADMIN ou expectedRole
        return true;
      } else if (currentRole === 'ROLE_PRE_SELLER') {
        // Redirection vers le tableau de bord pre_seller si le rôle est 'ROLE_PRE_SELLER'
        return this.router.parseUrl( 'admin/pre_seller_managment/list');
      } else {
        // Redirection en cas d'accès non autorisé
        return this.router.parseUrl('/not-authorized');
      }
  }
}
