import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, share } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  baseUrl="http://localhost/ITIServicePHP/";

  constructor(private http:HttpClient) { }

  getListaPorCursar(matricula:any){
    return this.http.get<any>(this.baseUrl+"MateriasPorCursar.php?matricula="+matricula)
    .pipe(map(Alumnos=>{
      return Alumnos;
    }));
  }

  agregarPorCursar(porcursar: any){
    return this.http.post<any>(this.baseUrl+"AgregarPorCursar.php", {datos:porcursar})
    .pipe(share());
  }
}
