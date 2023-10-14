import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  _rootUrl: string = `${environment.apiUrl}/file`;

  constructor(private _http: HttpClient) {}

  convertFileToBytesOld(file: File): Observable<Uint8Array> {
    return from(new Response(file).arrayBuffer()).pipe(
      map((buffer) => new Uint8Array(buffer))
    );
  }

  // convertFileToBytes(file: File): Observable<Uint8Array> {
  //   return new Observable((observer) => {
  //     const reader = new FileReader();

  //     reader.onload = (event) => {
  //       if (event.target && event.target.result) {
  //         const arrayBuffer = event.target.result as ArrayBuffer;
  //         const uint8Array = new Uint8Array(arrayBuffer);
  //         observer.next(new Uint8Array(arrayBuffer));
  //         observer.complete();
  //       } else {
  //         observer.error(new Error('Failed to read the file.'));
  //       }
  //     };

  //     reader.onerror = (error) => {
  //       observer.error(error);
  //     };

  //     reader.readAsArrayBuffer(file);
  //   });
  // }

  // Convert a File or Blob to a base64 string
  fileToBase64(file: File | Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to read the file.'));
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

  fileToBinary(file: File | Blob): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result instanceof ArrayBuffer) {
          const arrayBuffer = reader.result;
          const uint8Array = new Uint8Array(arrayBuffer);
          resolve(uint8Array);
        } else {
          reject(new Error('Failed to read the file.'));
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  convertFileToBytesAndBase64(
    file: File
  ): Promise<{ bytes: Uint8Array; base64: string }> {
    console.log(file);

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const arrayBuffer = event.target.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          const base64 = btoa(String.fromCharCode(...uint8Array));
          console.log(base64);

          resolve({ bytes: uint8Array, base64 });
        } else {
          reject(new Error('Failed to read the file.'));
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  uploadImage(file: File) {
    const formData = new FormData();
    console.log(file);

    formData.append('file', file, file.name);

    return this._http.post<string>(`${this._rootUrl}/image/upload`, formData);
  }
}
