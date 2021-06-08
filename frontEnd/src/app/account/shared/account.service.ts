//import {jwt} from "jwt-decode";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'



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
}
//   getAuthorizationToken(){
//     const token = window.localStorage.getItem('token')
//     return token
//   }

//   getTokenExpirationDate(token: string): Date{
//     const decoded: any = jwt(token)

//     if(decoded.exp === undefined){
//       return ;
//     }
//     const date = new Date(0)
//     date.setUTCSeconds(decoded.exp)
//     return date
//   }


// }

// function jwt_decode(token: string): any {
//   throw new Error('Function not implemented.');
// }

