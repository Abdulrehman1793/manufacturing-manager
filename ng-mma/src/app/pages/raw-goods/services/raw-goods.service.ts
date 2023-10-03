import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RawGoods } from '../models/raw-goods';
import { Page, Search } from 'src/app/core/models';

import { environment } from '../../../../environments/environment';

@Injectable()
export class RawGoodsService {
  _rootUrl: string = `${environment.apiUrl}/raw-goods`;

  constructor(private _http: HttpClient) {}

  findPage(search: Search): Observable<Page<RawGoods>> {
    let params = new HttpParams();

    params = params.append('page', search.page);
    params = params.append('size', search.pageSize);

    if ((search.sort && search.direction) || search.action === 'sort') {
      params = params.append('sort', search.sort + ':' + search.direction);
    }
    return this._http.get<Page<RawGoods>>(`${this._rootUrl}`, {
      params,
    });
  }

  create(rawGoods: RawGoods) {
    return this._http.post<any>(this._rootUrl, rawGoods);
  }

  update(rawGoods: RawGoods) {
    return this._http.put<any>(`${this._rootUrl}/${rawGoods.id}`, rawGoods);
  }

  delete(id: number) {
    return this._http.delete(`${this._rootUrl}/${id}`);
  }
}
