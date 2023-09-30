import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DropdownService {
  _rootUrl: string = `${environment.apiUrl}/lookup`;

  constructor(private _http: HttpClient) {}

  process(keys: string[]): Observable<any> {
    let params = new HttpParams();

    for (const key of keys) {
      params = params.append('keys', key);
    }

    return this._http.get<any>(`${this._rootUrl}`, {
      params,
    });
  }
}
