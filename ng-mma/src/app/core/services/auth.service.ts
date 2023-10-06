import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Role } from '../models/enums/role';

@Injectable({ providedIn: 'root' })
export class AuthService {
  _rootUrl: string = `${environment.apiUrl}/auth`;

  constructor(private _http: HttpClient) {}

  signinByUsername(params: { username: string; password: string }) {
    return this._http.post(`${this._rootUrl}/authenticate`, params);
  }

  signinByEmail(params: { email: string; password: string }) {
    return this._http.post(`${this._rootUrl}/authenticate`, params);
  }

  signup(params: {
    name: string;
    userName: string;
    email: string;
    password: string;
    role: Role;
  }) {
    return this._http.post(`${this._rootUrl}/register`, params);
  }

  logout() {}
}
