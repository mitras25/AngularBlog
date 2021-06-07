import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      //verificando se existe token
      const token = window.localStorage.getItem('token');
      if(token){
        return true;
      }else{
        //se nao tiver token retorna para tela de login
        this.router.navigate(['login']);
        return false;
      }
    
  }
  
}
