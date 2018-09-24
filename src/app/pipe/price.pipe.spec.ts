import { TestBed } from "@angular/core/testing";
import { PricePipe } from "./price.pipe";

describe('Price Pipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PricePipe
      ]
    });
  });

 [
    { given: { priceAmount: 1,          currency: 'PLN' }, expected: '1,00\u00a0zł' },
    { given: { priceAmount: 1234,       currency: 'PLN' }, expected: '1\u00a0234,00\u00a0zł' },
    { given: { priceAmount: 123456789,  currency: 'PLN' }, expected: '123\u00a0456\u00a0789,00\u00a0zł' },
    { given: { priceAmount: 1.1,        currency: 'PLN' }, expected: '1,10\u00a0zł' },
    { given: { priceAmount: 987.654,    currency: 'PLN' }, expected: '987,65\u00a0zł' },
    { given: { priceAmount: 987.655,    currency: 'PLN' }, expected: '987,66\u00a0zł' }
  ].forEach(({ given, expected }) => {
    it(`should format price as ${expected}`, () => {
      const pipe = TestBed.get(PricePipe);

      expect(pipe.transform(given.priceAmount, given.currency)).toEqual(expected);
    });
  });
});
