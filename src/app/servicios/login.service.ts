import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  redirectUrl!: string;
  baseUrl:string = "http://localhost/ITIServicePHP/Login.php";

  constructor(private http: HttpClient) { }

  VerificarDatos(matricula: any,password: any){
    return this.http.post<any>(this.baseUrl,{matricula,password})
    .pipe(map(Users => {
      if(Users[0].contrasenia!=""){
        this.setToken(JSON.stringify(Users[0]));
      }
      return Users;
    }));
  }
  setToken(token:string){
    localStorage.setItem('token',token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  deleteToken(){
    localStorage.removeItem('token');
  }
  isLoggedIn(){
    const usertoken=this.getToken();
    if(usertoken!=null){
      return true
    }
    return false;
  }
}
