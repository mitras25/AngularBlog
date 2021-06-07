
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

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      console.log(`chegou aqui no submit`)
      const result = await this.accountService.login(this.login)
      console.log(`login efetuado: ${result}`)

      //navega para a rota vazia
      this.router.navigate([''])
    }catch(error){
      console.log(`deu erro no submit`)
      console.log(error)
    }
  }

}
