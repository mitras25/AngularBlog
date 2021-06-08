import { User } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  baseUrl = "http://localhost:8080/users"
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: isError ? ["msg-error"] : ["msg-success"],
      
    });
  }

  create(usuario: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/create`, usuario)
  }
}
