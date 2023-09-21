import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UnitOfMeasure } from '../models/uom';
import { Page, Search } from 'src/app/core/models';

@Injectable()
export class UomService {
  _rootUrl: string = 'http://localhost:8080/api/v1/uom';

  constructor(private _http: HttpClient) {}

  findPage(search: Search): Observable<Page<UnitOfMeasure>> {
    let params = new HttpParams();

    params = params.append('page', search.page);
    params = params.append('size', search.pageSize);

    if ((search.sort && search.direction) || search.action === 'sort') {
      params = params.append('sort', search.sort + ':' + search.direction);
    }
    return this._http.get<Page<UnitOfMeasure>>(`${this._rootUrl}`, {
      params,
    });
  }
}
