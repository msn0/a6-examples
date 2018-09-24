import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  transform(value: number) {
    return new Intl
      .NumberFormat('PL', { style: 'currency', currency: 'PLN' })
      .format(value);
  }
}
