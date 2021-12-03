import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, share } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MateriasAprobadasService {
  baseUrl="http://localhost/ITIServicePHP/";

  constructor(private http:HttpClient) { }

  getListaCursando(matricula:any){
    return this.http.get<any>(this.baseUrl+"MateriasAprobadas.php?matricula="+matricula)
    .pipe(map(Alumnos=>{
      return Alumnos;
    }));
  }

  agregarAprobadas(aprobadas: any){
    return this.http.post<any>(this.baseUrl+"AgregarAprobadas.php", {datos:aprobadas})
    .pipe(share());
  }
  
}