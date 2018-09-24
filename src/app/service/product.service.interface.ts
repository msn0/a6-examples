import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

export interface ProductServiceInterface {
  getProducts(): Observable<Product[]>
}
