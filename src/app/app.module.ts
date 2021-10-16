import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductItemComponent } from './components/productsList/product-item/product-item.component';
import { CartListComponent } from './components/productsList/cart-list/cart-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/productsList/add-product/add-product.component';
import { ListOfProductsComponent } from './components/productsList/list-of-products/list-of-products.component';
import { ProductTitlePipe } from './pipes/product-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductItemComponent,
    CartListComponent,
    DashboardComponent,
    LoginComponent,
    AddProductComponent,
    ListOfProductsComponent,
    ProductTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
