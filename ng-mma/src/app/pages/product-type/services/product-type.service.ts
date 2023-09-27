import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductType } from '../models/product-type';
import { Page, Search } from 'src/app/core/models';

import { environment } from '../../../../environments/environment';

@Injectable()
export class ProductTypeService {
  _rootUrl: string = `${environment.apiUrl}/product-type`;

  constructor(private _http: HttpClient) {}

  findPage(search: Search): Observable<Page<ProductType>> {
    let params = new HttpParams();

    params = params.append('page', search.page);
    params = params.append('size', search.pageSize);

    if ((search.sort && search.direction) || search.action === 'sort') {
      params = params.append('sort', search.sort + ':' + search.direction);
    }
    return this._http.get<Page<ProductType>>(`${this._rootUrl}`, {
      params,
    });
  }

  create(productType: ProductType) {
    return this._http.post<any>(this._rootUrl, productType);
  }

  update(productType: ProductType) {
    console.log(productType);

    return this._http.put<any>(
      `${this._rootUrl}/${productType.id}`,
      productType
    );
  }

  delete(id: string) {
    return this._http.delete(`${this._rootUrl}/${id}`);
  }
}
