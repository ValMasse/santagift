import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadeau } from '../models/cadeau';

const apiUrl = 'http://localhost:8080/gifts';

@Injectable({
  providedIn: 'root'
})

export class CadeauxHttpService {  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cadeau[]>{
    return this.http.get<Cadeau[]>(apiUrl)
  }

}
