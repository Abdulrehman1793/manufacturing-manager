import { Component } from '@angular/core';

import { UomService } from '../services/uom.service';

@Component({
  selector: 'app-uoms',
  templateUrl: './uoms.component.html',
  styleUrls: ['./uoms.component.scss'],
})
export class UomsComponent {
  constructor(private uomService: UomService) {
    // uomService.load().subscribe((data) => {
    //   console.log(data);
    // });
  }
}
