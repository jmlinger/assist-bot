import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  });

  criarUsuario(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signup`, data);
  }
}
