import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class LocalStorageService {
  _rootUrl: string = `${environment.apiUrl}/auth`;

  constructor() {}

  setItem(params: any) {
    window.localStorage.setItem('tokens', JSON.stringify(params));
  }

  getItem() {}

  removeItem() {}
}
