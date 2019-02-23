import { TestBed } from "@angular/core/testing";
import { ProductComponent } from "./product.component";
import { ProductService } from "../../service/product.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { PricePipe } from "../../pipe/price.pipe";
import { DatePipe } from "../../pipe/date.pipe";

const products = Object.freeze([
  { id: 1, name: 'foo', price: 112233, lastUpdate: 111222333444 },
  { id: 2, name: 'bar', price: 22334455.666, lastUpdate: 222333444555 }
]);

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent, PricePipe, DatePipe],
      providers: [ProductService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should display product names', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const service = fixture.debugElement.injector.get(ProductService);
    spyOn(service, 'getProducts').and.returnValue(of(products));

    fixture.detectChanges();

    const names = fixture.debugElement
      .queryAll(By.css('li .name'))
      .map(element => element.nativeElement.innerHTML.trim());
    expect(names).toEqual(['foo', 'bar']);
  });

  it('should display updateDate', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const service = fixture.debugElement.injector.get(ProductService);
    spyOn(service, 'getProducts').and.returnValue(of(products));

    fixture.detectChanges();

    const dates = fixture.debugElement
      .queryAll(By.css('li .date'))
      .map(element => element.nativeElement.innerHTML.trim());
    expect(dates).toEqual([
      'środa, 11 lipca 1973, 07:05:33',
      'poniedziałek, 17 stycznia 1977, 07:17:24'
    ]);
  });

  it('should display price', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const service = fixture.debugElement.injector.get(ProductService);
    spyOn(service, 'getProducts').and.returnValue(of(products));

    fixture.detectChanges();

    const prices = fixture.debugElement
      .queryAll(By.css('li .price'))
      .map(element => element.nativeElement.innerHTML.trim());
    expect(prices).toEqual([
      '112&nbsp;233,00&nbsp;zł',
      '22&nbsp;334&nbsp;455,67&nbsp;zł'
    ]);
  });

  it('product id should be rendered as data-product-id because of some reason', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const service = fixture.debugElement.injector.get(ProductService);
    spyOn(service, 'getProducts').and.returnValue(of(products));

    fixture.detectChanges();

    const prices = fixture.debugElement
      .queryAll(By.css('li'))
      .map(element => element.nativeElement.getAttribute('data-product-id'));
    expect(prices).toEqual(['1', '2']);
  });
})
