import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  //fazendo login
  login(user: any){
    return new Promise((resolve)=>{
      //se der ok vai salvar o token no localStorage
      window.localStorage.setItem('token', 'meu-token');
      resolve(true)
    })
  }

  //
  createAccount(account: any){
    return new Promise((resolve)=>{
      resolve:(true)
    })
  }
}
