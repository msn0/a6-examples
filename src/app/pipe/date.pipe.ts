import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  transform(value: number) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    return new Intl.DateTimeFormat('PL', options).format(value);
  }
}
