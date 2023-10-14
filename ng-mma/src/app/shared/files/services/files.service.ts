import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  _rootUrl: string = `${environment.apiUrl}/file`;

  constructor(private _http: HttpClient) {}

  uploadImage(file: File) {
    const formData = new FormData();
    console.log(file);

    formData.append('file', file, file.name);

    return this._http.post<string>(`${this._rootUrl}/image/upload`, formData);
  }
}
