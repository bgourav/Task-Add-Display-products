import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from  "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  
  submit(data): Observable<any>
  {
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.http.post('http://localhost:3000/addproducts',data,httpOptions);
  }
  getProducts():Observable<any>
  {
    return this.http.get('http://localhost:3000/showproducts');
  }
}
