import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {

  transform(value: any, keyName: any, sort: any): Object[] {
    if (!value) {
        return [];
    }

    let keyArr: any[] = Object.keys(value),
        dataArr = [];

    keyArr.forEach((key: any) => {
         // create the literal from the key's value
        let retObj = {
            childValue: value[key]
        };
        // add the key as a property
        retObj[keyName] = key;
        dataArr.push(retObj);
    });

    if (sort) {
        dataArr.sort((a: Object, b: Object): number => {
            return a[keyName] > b[keyName] ? 1 : -1;
        });
    }

    return dataArr;
  }

}
