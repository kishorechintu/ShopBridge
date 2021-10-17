import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PRODUCT_MODEL } from 'src/app/model';
import { ShopbridgeService } from 'src/app/services/shopbridge.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() productsList: PRODUCT_MODEL[];
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<PRODUCT_MODEL>();
  constructor() {}

  deleteProduct(id: string) {
    this.deleteEvent.emit(id);
  }

  editProduct(item: PRODUCT_MODEL) {
    this.editEvent.emit(item);
  }
}
