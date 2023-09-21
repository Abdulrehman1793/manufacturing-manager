import { Component } from '@angular/core';

import { UomService } from '../services/uom.service';

@Component({
  selector: 'app-uoms',
  templateUrl: './uoms.component.html',
  styleUrls: ['./uoms.component.scss'],
})
export class UomsComponent {
  constructor(private uomService: UomService) {
    uomService
      .findPage({
        action: 'page',
        page: 0,
        pageSize: 5,
        sort: 'name',
        direction: 'asc',
      })
      .subscribe((data) => console.log(data));
  }
}
