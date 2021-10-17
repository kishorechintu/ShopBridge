import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ShopbridgeService } from '../services/shopbridge.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private sbService: ShopbridgeService, private router: Router) {}
  canActivate(): boolean {
    if (!this.sbService.getAuthState()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
