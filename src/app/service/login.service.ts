import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpCLient:HttpClient,
  ) { }

  UserLogin(Userdata){
    return this.httpCLient.post(`${environment.baseurl}/auth/login`,Userdata )
  }
  isLogin(){
    return !!localStorage.getItem(environment.datakey)
  }
}
