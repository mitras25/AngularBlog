import { AccountService } from './account.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      //verificando se existe token
      if (this.accountService.isUserLoggedIn()){
        return true;
      }else{
        //se nao tiver token retorna para tela de login
        this.router.navigate(['lista']);
        return false;
      }
    
  }
  
}
