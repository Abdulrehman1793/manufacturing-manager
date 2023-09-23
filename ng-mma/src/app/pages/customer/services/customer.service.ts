import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer } from '../models/customer';
import { Page, Search } from 'src/app/core/models';

import { environment } from '../../../../environments/environment';

@Injectable()
export class CustomerService {
  _rootUrl: string = `${environment.apiUrl}/customer`;

  constructor(private _http: HttpClient) {}

  findPage(search: Search): Observable<Page<Customer>> {
    let params = new HttpParams();

    params = params.append('page', search.page);
    params = params.append('size', search.pageSize);

    if ((search.sort && search.direction) || search.action === 'sort') {
      params = params.append('sort', search.sort + ':' + search.direction);
    }
    return this._http.get<Page<Customer>>(`${this._rootUrl}`, {
      params,
    });
  }
}
