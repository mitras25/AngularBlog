import { Router } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../usuario.model';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css'],
})
export class UsuarioCreateComponent implements OnInit {
  usuario: User = {
    userName: '',
    email: '',
    password: '',
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  createUser(): void {
    this.usuarioService.create(this.usuario).subscribe((msg) => {
      console.log(msg)
      this.usuarioService.showMessage(`${msg}`);
      this.router.navigate(['/login']);
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
