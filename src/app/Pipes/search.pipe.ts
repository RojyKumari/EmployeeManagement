import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../model/employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Employee[], query: string): Employee[] {
    let result: Employee[];
    result = !query ? value :  value.filter((v) => {
       return v.name.indexOf(query) > -1;
      });
    return result;
  }

}
