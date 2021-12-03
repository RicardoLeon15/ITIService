import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  baseUrl="http://localhost/ITIServicePHP/ListaAlumnos.php";

  constructor(private http:HttpClient) { }

  getListaAlumnos(){
    return this.http.get<any>(this.baseUrl)
    .pipe(map(Alumnos=>{
      return Alumnos;
    }));
  }

}
