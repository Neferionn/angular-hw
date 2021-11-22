import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    return value.replace(/\w\S*/g, (text) => {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
  }
}
