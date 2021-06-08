import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Articles } from './article.model';
import jwt from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = "http://localhost:8080/articles"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
 
  //criando
  create(article: Articles, user: any): Observable<Articles>{
    return this.http.post<Articles>(`${this.baseUrl}/create/${user.idUsuario}`, article)
  }

  //lendo
  read(): Observable<Articles[]>{
    return this.http.get<Articles[]>(this.baseUrl)
  }

  
}
