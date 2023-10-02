import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FinishedGoods } from '../models/finished-goods';
import { Page, Search } from 'src/app/core/models';

import { environment } from '../../../../environments/environment';

@Injectable()
export class FinishedGoodsService {
  _rootUrl: string = `${environment.apiUrl}/finished-goods`;

  constructor(private _http: HttpClient) {}

  findPage(search: Search): Observable<Page<FinishedGoods>> {
    let params = new HttpParams();

    params = params.append('page', search.page);
    params = params.append('size', search.pageSize);

    if ((search.sort && search.direction) || search.action === 'sort') {
      params = params.append('sort', search.sort + ':' + search.direction);
    }
    return this._http.get<Page<FinishedGoods>>(`${this._rootUrl}`, {
      params,
    });
  }

  create(finishedGoods: FinishedGoods) {
    return this._http.post<any>(this._rootUrl, finishedGoods);
  }

  update(finishedGoods: FinishedGoods) {
    return this._http.put<any>(
      `${this._rootUrl}/${finishedGoods.id}`,
      finishedGoods
    );
  }

  delete(id: number) {
    return this._http.delete(`${this._rootUrl}/${id}`);
  }
}
