import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_MODEL } from 'src/app/model';
import { ShopbridgeService } from 'src/app/services/shopbridge.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
})
export class ListOfProductsComponent implements OnInit {
  public productsList: PRODUCT_MODEL[] = [];
  public globalProduct: PRODUCT_MODEL[] = [];
  constructor(private sbService: ShopbridgeService, private router: Router) {}
  public searchText: string = '';

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.sbService.getProducts().subscribe((data) => {
      this.productsList = [...data];
      this.globalProduct = this.productsList;
    });
  }

  deleteProduct(id: string) {
    this.sbService.deleteProduct(id).subscribe(() => {
      this.getProducts();
    });
  }

  editProduct(item: PRODUCT_MODEL) {
    this.router.navigate([
      '/dashboard/additem',
      { product: JSON.stringify(item) },
    ]);
  }

  searchProduct() {
    if (this.productsList.length > 0) {
      let filteredProducts = [];
      this.productsList.forEach((item) => {
        if (item.name.toLowerCase().startsWith(this.searchText.toLowerCase())) {
          filteredProducts.push(item);
        }
      });
      this.productsList = Object.assign([], filteredProducts);
    }
  }

  closeSearch() {
    this.searchText = '';
    this.productsList = Object.assign([], this.globalProduct);
  }
}
