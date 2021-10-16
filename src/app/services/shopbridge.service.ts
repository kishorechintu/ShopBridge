import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCT_MODEL } from '../model';

const HOST_ADDRESS = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ShopbridgeService {
  private isAuthenticated: boolean = false;
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<PRODUCT_MODEL[]> {
    return this.httpClient.get<PRODUCT_MODEL[]>(`${HOST_ADDRESS}/products`);
  }

  getAuthState() {
    return this.isAuthenticated;
  }

  setAuthState(state: boolean) {
    this.isAuthenticated = state;
  }

  addProduct(name, price, category, description) {
    let body = {
      id: Date.now(),
      name: name,
      category: category,
      price: price,
      description: description,
    };
    return this.httpClient.post(`${HOST_ADDRESS}/products`, body);
  }

  editProduct(id, name, price, category, description) {
    let body = {
      name: name,
      category: category,
      price: price,
      description: description,
    };
    return this.httpClient.patch(`${HOST_ADDRESS}/products/${id}`, body);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(`${HOST_ADDRESS}/products/${id}`);
  }

  isAuthenticatedUser(username, password): Observable<any> {
    const body = {
      email: username,
      password: password,
    };
    return this.httpClient.post<any>(`${HOST_ADDRESS}/POST /signin`, body);
  }
}
