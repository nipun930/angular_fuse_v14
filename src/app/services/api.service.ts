import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headerOptions = new HttpHeaders();
  constructor(
    private http: HttpClient
  ) { 
    this.headerOptions.set('Content-Type', 'application/json; charset=utf-8');
  }

  getData(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1', {headers: this.headerOptions});
  }
}
