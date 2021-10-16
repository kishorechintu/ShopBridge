import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/productsList/add-product/add-product.component';
import { ListOfProductsComponent } from './components/productsList/list-of-products/list-of-products.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'additem',
        component: AddProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'additem/:product',
        component: AddProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'productslist',
        component: ListOfProductsComponent,
        canActivate: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
