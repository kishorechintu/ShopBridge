import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopbridgeService } from 'src/app/services/shopbridge.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() isExpanded: boolean = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  
  constructor(private sbService: ShopbridgeService, private router: Router) {}

  ngOnInit(): void {}
  logOut() {
    this.sbService.setAuthState(false);
    this.router.navigate([''])
  }
}
