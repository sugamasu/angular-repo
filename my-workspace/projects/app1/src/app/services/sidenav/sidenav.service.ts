import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AvailableMenuDto,
  AvailableMenuListDto,
} from '../../available-menu-list-dto';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  constructor() {}

  getAvailableMenu() {
    var aaa = 10;
    return new Observable<any>((observer) => {
      let data: AvailableMenuDto[] = [
        {
          itemNo: 1,
          apiName: 'name1',
          propertyId: 'prop1',
        },
      ];
      let list: AvailableMenuListDto[] = [
        { propertyId: 'hogehoge', availableMenuDto: data },
      ];
      observer.next(list);
    });
  }
}
