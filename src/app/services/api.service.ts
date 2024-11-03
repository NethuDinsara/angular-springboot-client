import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl ='http://localhost:8080/api/customer'
  constructor(private http: HttpClient) { }

  postData(data:any): Observable<any>{
    const headers=new HttpHeaders({'content-Type': 'application/json'});
    return this.http.post(this.apiUrl,data,{headers});
  }
}
