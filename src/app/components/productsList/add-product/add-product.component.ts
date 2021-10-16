import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PRODUCT_MODEL } from 'src/app/model';
import { ShopbridgeService } from 'src/app/services/shopbridge.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public addProductForm: FormGroup = new FormGroup({});
  public productAddState: boolean = false;
  public cardTitle: string;
  public product: PRODUCT_MODEL;
  public actionType: string;
  public categories = [
    { value: 'Electronics', viewValue: 'Electronics' },
    { value: 'Furniture', viewValue: 'Furniture' },
    { value: 'Gadgets', viewValue: 'Gadgets' },
  ];
  constructor(
    private sbService: ShopbridgeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.addProductForm)
    this.cardTitle = 'Add Product';
    this.actionType = 'Add';
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.product = JSON.parse(params.get('product'));
    });

    this.addForm();
    if (this.product) {
      this.editForm(this.product);
    }
  }

  editForm(product: PRODUCT_MODEL) {
    this.cardTitle = 'Edit Product';
    this.actionType = 'Edit';
    this.addProductForm.setValue({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
    });
  }

  addForm() {
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  submit() {
    switch (this.actionType) {
      case 'Edit': {
        this.editProduct();
        break;
      }
      case 'Add': {
        this.addProduct();
        break;
      }
    }
  }

  editProduct() {
    this.sbService
      .editProduct(
        this.product.id,
        this.addProductForm.controls.name.value,
        this.addProductForm.controls.price.value,
        this.addProductForm.controls.category.value,
        this.addProductForm.controls.description.value
      )
      .subscribe(() => {
        
        console.log(this.addProductForm)
        this.addProductForm.reset();
        this.router.navigate(['dashboard/productslist'])
        // Object.keys(this.addProductForm.controls).forEach((key) => {
        //   const control = this.addProductForm.controls[key];
        //   control.markAsPristine();
        //   control.markAsUntouched();
        // });
      });
  }

  addProduct() {
    console.log('adding');
    this.sbService
      .addProduct(
        this.addProductForm.controls.name.value,
        this.addProductForm.controls.price.value,
        this.addProductForm.controls.category.value,
        this.addProductForm.controls.description.value
      )
      .subscribe((data) => {
        console.log('data saved', data);
        this.productAddState = true;
        this.addProductForm.reset();
        this.addProductForm.markAllAsTouched();
        setTimeout(() => {
          this.productAddState = false;
        }, 2000);
      });
  }
}
