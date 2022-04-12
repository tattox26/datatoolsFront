import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';

const baseUrl = 'http://localhost:8080/ApiRest/empresas';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  constructor(private http: HttpClient) { }

  read(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${baseUrl}`, httpOptions);
  }

  get(id: any): Observable<Empresa> {
    return this.http.get(`${baseUrl}/get/${id}`, httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/store`, data, httpOptions);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data, httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`, httpOptions);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${baseUrl}?title=${title}`, httpOptions);
  }
}
