import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TablaMateriasService {

  baseUrl="http://localhost/ITIServicePHP/";

  constructor(private http:HttpClient) { }

  getMateriasAprobadas(){
    return this.http.get<any>(this.baseUrl+"ListaMateriasAprobadas.php")
    .pipe(map(materias=>{
      return materias;
    }));
  }
  
  getMateriasCursando(){
    return this.http.get<any>(this.baseUrl+"ListaMateriasCursando.php")
    .pipe(map(materias=>{
      return materias;
    }));
  }

  getMateriasPorCursar(){
    return this.http.get<any>(this.baseUrl+"ListaMateriasPorCursar.php")
    .pipe(map(materias=>{
      return materias;
    }));
  }

}
