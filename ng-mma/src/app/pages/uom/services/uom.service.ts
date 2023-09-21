import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UnitOfMeasure } from '../models/uom';

@Injectable()
export class UomService {
  constructor(private _http: HttpClient) {}
}
