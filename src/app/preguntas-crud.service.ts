import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Preguntas } from './preguntas';


@Injectable({
  providedIn: 'root'
})

export class PreguntasCRUDService {

  apiUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  consultarPregunta():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}consultar`)
  }



  insertarPregunta(pregunta: Preguntas): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}insertar`, pregunta)
  }


}
