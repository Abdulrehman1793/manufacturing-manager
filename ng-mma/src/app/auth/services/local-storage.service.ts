import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AuthResponse } from '../models';

@Injectable()
export class LocalStorageService {
  readonly TOKEN = 'auth';

  constructor() {}

  setItem(params: AuthResponse) {
    window.localStorage.setItem(this.TOKEN, JSON.stringify(params));
  }

  getItem(): AuthResponse | null {
    let tokens = window.localStorage.getItem(this.TOKEN);
    if (tokens) return JSON.parse(tokens);
    return null;
  }

  removeItem() {
    window.localStorage.removeItem(this.TOKEN);
  }
}
