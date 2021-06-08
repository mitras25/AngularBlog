import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
//import * as jwt from 'jsonwebtoken'
import jwt from "jwt-decode";




@Injectable({
  providedIn: 'root'
})
export class AccountService {

 

  baseUrl = "http://localhost:8080/auth"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  //fazendo login
   async login(user: any){
    const result = await this.http.post<any>(`${this.baseUrl}`, user).toPromise()
   if(result && result.token){
      window.localStorage.setItem('token', result.token)
     return true
   }
   return false
  }


  getAuthorizationToken() {
    const token = window.localStorage.getItem('token')
    return token
  }

getTokenExpirationDate(token: string): Date{
    const decoded: any = jwt(token)
    // if(decoded.exp === undefined){
    //   return date
    // }
    const date = new Date(0)
    date.setUTCSeconds(decoded.exp)
    return date
  }

  isTokenExpeired(token?: string): boolean {
    
    if(!token){
      return true
    }

    const date = this.getTokenExpirationDate(token)
    if (date === undefined){
      return false
    }

    return !(date.valueOf() > new Date().valueOf())
  }


  isUserLoggedIn(){
    const token = this.getAuthorizationToken()
    if(!token){
      return false
    }else if( this.isTokenExpeired(token)){
      return false
    }
    return true
  }

}
