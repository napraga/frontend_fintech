import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class _AuthService {
  private apiUrl = 'http://localhost:3000/auth/login';

  constructor() {}

  login(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', this.apiUrl, true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.responseText && JSON.parse(xhr.responseText).statusCode !== 401) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      };

      xhr.onerror = () => {
        reject(xhr.statusText);
      };

      xhr.send(JSON.stringify(data));
    });
  }
}