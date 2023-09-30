import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cost } from '../models/cost';
import { Page, Search } from 'src/app/core/models';

import { environment } from '../../../../environments/environment';

@Injectable()
export class CostService {
  _rootUrl: string = `${environment.apiUrl}/cost`;

  constructor(private _http: HttpClient) {}

  findPage(search: Search): Observable<Page<Cost>> {
    let params = new HttpParams();

    params = params.append('page', search.page);
    params = params.append('size', search.pageSize);

    if ((search.sort && search.direction) || search.action === 'sort') {
      params = params.append('sort', search.sort + ':' + search.direction);
    }
    return this._http.get<Page<Cost>>(`${this._rootUrl}`, {
      params,
    });
  }

  create(cost: Cost) {
    return this._http.post<any>(this._rootUrl, cost);
  }

  update(cost: Cost) {
    return this._http.put<any>(`${this._rootUrl}/${cost.id}`, cost);
  }

  delete(id: number) {
    return this._http.delete(`${this._rootUrl}/${id}`);
  }
}
