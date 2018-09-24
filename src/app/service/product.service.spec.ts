import { TestBed } from "@angular/core/testing";
import { ProductService } from "./product.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('Product Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should fetch from API', (done) => {
    const service = TestBed.get(ProductService);
    const http = TestBed.get(HttpTestingController);

    service.getProducts().subscribe(products => {
      expect(products).toEqual([
        { id: 1, name: 'foo', price: 11, lastUpdate: 111 },
        { id: 2, name: 'bar', price: 22, lastUpdate: 222 }
      ])
      done();
    });

    http
      .expectOne('http://127.0.0.1:3000/api')
      .flush({
        products: [
          { id: 1, name: 'foo', price: 11, lastUpdate: 111 },
          { id: 2, name: 'bar', price: 22, lastUpdate: 222 }
        ]
      });

  });
})
