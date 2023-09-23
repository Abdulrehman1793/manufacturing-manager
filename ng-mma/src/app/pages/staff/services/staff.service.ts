import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Staff } from '../models/staff';
import { Page, Search } from 'src/app/core/models';

import { environment } from '../../../../environments/environment';

@Injectable()
export class StaffService {
  _rootUrl: string = `${environment.apiUrl}/staff`;

  constructor(private _http: HttpClient) {}

  findPage(search: Search): Observable<Page<Staff>> {
    let params = new HttpParams();

    params = params.append('page', search.page);
    params = params.append('size', search.pageSize);

    if ((search.sort && search.direction) || search.action === 'sort') {
      params = params.append('sort', search.sort + ':' + search.direction);
    }
    return this._http.get<Page<Staff>>(`${this._rootUrl}`, {
      params,
    });
  }

  createStaff(staff: Staff) {
    return this._http.post<any>(`${this._rootUrl}`, staff);
  }
}
