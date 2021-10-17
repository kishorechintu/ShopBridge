import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopbridgeService } from 'src/app/services/shopbridge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isExpanded = true;
  constructor(public sbService: ShopbridgeService, private router: Router) {}

  ngOnInit() {
    this.router.navigate(['dashboard/productslist']);
  }
  logout() {
    this.sbService.setAuthState(false);
    this.router.navigate(['']);
  }
}
