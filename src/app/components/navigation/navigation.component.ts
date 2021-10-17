import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() isExpanded: boolean = true;
  @Output() logoutevent = new EventEmitter();
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  logOut() {
    this.logoutevent.emit();
  }
}
