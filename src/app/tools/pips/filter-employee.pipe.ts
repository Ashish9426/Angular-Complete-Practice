import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmployee'
})
export class FilterEmployeePipe implements PipeTransform {

  transform(value: any, ...args: string[]): unknown {
    if (args[0] == undefined || args[0] == '') {
      return value
    }
    else {
      var r = value.filter((e: any) => {
        console.log(args[0]);
        return e.name.toLowerCase().startsWith(args[0].toLowerCase()) || e.name.startsWith(args[0].toLowerCase()) ||
         e.dept.toLowerCase().startsWith(args[0].toLowerCase()) || e.dept.startsWith(args[0].toLowerCase()) || 
         e.gender.toLowerCase().startsWith(args[0].toLowerCase()) || e.gender.startsWith(args[0].toLowerCase()) || 
         e.id == [args[0]]
      });
      console.log(r)
      // return e.name.toLowerCase().indexOf(args.toLowerCase())>-1})
      return r;

    }
  }

}
