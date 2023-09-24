import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PurchaseUnit } from '../models/purchase-unit';
import { Page, Search } from 'src/app/core/models';

import { environment } from '../../../../environments/environment';

@Injectable()
export class PurchaseUnitService {
  _rootUrl: string = `${environment.apiUrl}/purchase-unit`;

  constructor(private _http: HttpClient) {}

  findPage(search: Search): Observable<Page<PurchaseUnit>> {
    let params = new HttpParams();

    params = params.append('page', search.page);
    params = params.append('size', search.pageSize);

    if ((search.sort && search.direction) || search.action === 'sort') {
      params = params.append('sort', search.sort + ':' + search.direction);
    }
    return this._http.get<Page<PurchaseUnit>>(`${this._rootUrl}`, {
      params,
    });
  }

  create(purchaseUnit: PurchaseUnit) {
    return this._http.post<any>(this._rootUrl, purchaseUnit);
  }

  update(purchaseUnit: PurchaseUnit) {
    return this._http.put<any>(
      `${this._rootUrl}/${purchaseUnit.id}`,
      purchaseUnit
    );
  }

  delete(id: string) {
    return this._http.delete(`${this._rootUrl}/${id}`);
  }
}
