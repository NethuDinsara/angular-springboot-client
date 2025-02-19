import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl= 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  //Method to make POST request
  addUser(user:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/addUser`,user)
  }
}
