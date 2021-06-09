import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Articles } from './article.model';
import jwt from 'jwt-decode'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = "http://localhost:8080/articles"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ["msg-error"] : ["msg-success"]
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
  //Buscando artigos por autor
  myArticles(user: any): Observable<Articles[]>{
    return this.http.get<Articles[]>(`${this.baseUrl}/articleAutor/${user.idUsuario}`)
  }


  readById(id: string | null): Observable<Articles> {
    const url = `${this.baseUrl}/buscar/${id}`;
    return this.http.get<Articles>(url)
    .pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string | null): Observable<Articles> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<Articles>(url)
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }

  
}
