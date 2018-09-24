import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Product } from "../model/product.model";
import { environment } from '../../environments/environment';
import { ProductServiceInterface } from './product.service.interface';

@Injectable()
export class ProductService implements ProductServiceInterface {

  private products: Subject<Product[]> = new Subject<Product[]>();

  constructor(private http: HttpClient) {
    this.fetch();
  }

  getProducts(): Observable<Product[]> {
    return this.products.asObservable();
  }

  private fetch(): void {
    this.http
      .get<Product[]>(environment.apiBaseUrl)
      .subscribe((response: any) => this.products.next(response.products));
  }
}
