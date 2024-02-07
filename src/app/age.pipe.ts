import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let currentYear = new Date().getFullYear();
    let dobYear = value.split("-")[0]
    let age = currentYear-dobYear;

    return age;
  }

}
