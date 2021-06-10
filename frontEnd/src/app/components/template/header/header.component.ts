import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logado = localStorage.getItem("token");
  

  showLogin: boolean = this.logado ? false : true
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    token ? !this.showLogin : null
  }
  

  logout(){
    this.showLogin = !this.showLogin
    const token = window.localStorage.removeItem('token')
    this.router.navigate(['/lista']);
  }
}
