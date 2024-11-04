import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // headerOptions = new HttpHeaders();
  headerOptions;
  constructor(
    private http: HttpClient
  ) { 
    this.headerOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')};
  }

  getData(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1', this.headerOptions);
  }

  getUserData(): Observable<any>{
    return this.http.get(environment.baseURL+'/companies',this.headerOptions);
  }
}
