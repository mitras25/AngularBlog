import { CategoryService } from './../../components/category/category.service';

import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
     private accountService: AccountService,
     
     ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      const result = await this.accountService.login(this.login)
    
      //navega para a rota vazia
      this.router.navigate([''])
    }catch(error){
      this.accountService.showMessage('Dados inválidos');
      this.router.navigate(['lista']);
    }
  }

}
