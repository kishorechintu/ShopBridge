import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productTitle'
})
export class ProductTitlePipe implements PipeTransform {

  transform(value: string): unknown {
    let str = value.split(' ');
    let newstr = str[0].slice(0,1);
    return newstr;
  }

}
