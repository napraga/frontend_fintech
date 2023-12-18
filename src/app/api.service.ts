import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class _ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor() {}

  getBudget(): Promise<any> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.apiUrl+"/budgets");
        const authToken = localStorage.getItem('Bearer');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader("Authorization", "Bearer " + authToken);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.responseText && JSON.parse(xhr.responseText).statusCode !== 403) {
              resolve(xhr.responseText);
            } else {
              reject(xhr.statusText);
            }
          }
        };
  
        xhr.onerror = () => {
          reject(xhr.statusText);
        };
  
        xhr.send();
      });
  }

  deleteBudget(id:any): Promise<any> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open('DELETE', this.apiUrl+"/budgets/"+id);
        const authToken = localStorage.getItem('Bearer');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader("Authorization", "Bearer " + authToken);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.responseText && JSON.parse(xhr.responseText).statusCode !== 403) {
              resolve(xhr.responseText);
            } else {
              reject(xhr.statusText);
            }
          }
        };
  
        xhr.onerror = () => {
          reject(xhr.statusText);
        };
  
        xhr.send();
      });
  }

  getFinancesByDate(fechaInicio: string, fechaFinal: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            "fechaInicio": fechaInicio,
            "fechaFinal": fechaFinal            
        });
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open('POST', this.apiUrl+"/finances/transactionsbydate");
        const authToken = localStorage.getItem('Bearer');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader("Authorization", "Bearer " + authToken);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.responseText && JSON.parse(xhr.responseText).statusCode !== 403) {
              resolve(xhr.responseText);
            } else {
              reject(xhr.statusText);
            }
          }
        };
  
        xhr.onerror = () => {
          reject(xhr.statusText);
        };
  
        xhr.send(data);
      });
  }

  getFinances(): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.apiUrl+"/finances/transactions");
      const authToken = localStorage.getItem('Bearer');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader("Authorization", "Bearer " + authToken);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.responseText && JSON.parse(xhr.responseText).statusCode !== 403) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      };

      xhr.onerror = () => {
        reject(xhr.statusText);
      };

      xhr.send();
    });
  }
  saveBudget(formdata:any): Promise<any> {
    return new Promise((resolve, reject) => {
        var data = JSON.stringify(formdata);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.apiUrl+"/budgets");
        const authToken = localStorage.getItem('Bearer');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader("Authorization", "Bearer " + authToken);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.responseText && JSON.parse(xhr.responseText).statusCode !== 403) {
              resolve(xhr.responseText);
            } else {
              reject(xhr.statusText);
            }
          }
        };
  
        xhr.onerror = () => {
          reject(xhr.statusText);
        };
  
        xhr.send(data);
      });
  }

  saveFinances(formdata:any): Promise<any> {
    return new Promise((resolve, reject) => {
      var data = JSON.stringify(formdata);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', this.apiUrl+"/finances/add-transaction");
      const authToken = localStorage.getItem('Bearer');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader("Authorization", "Bearer " + authToken);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.responseText && JSON.parse(xhr.responseText).statusCode !== 403) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.statusText);
          }
        }
      };

      xhr.onerror = () => {
        reject(xhr.statusText);
      };

      xhr.send(data);
    });
  }
}