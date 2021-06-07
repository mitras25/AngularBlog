import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Articles } from './article.model';

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
  create(article: Articles): Observable<Articles>{
    return this.http.post<Articles>(`${this.baseUrl}/create`, article)
  }

  //lendo
  read(): Observable<Articles[]>{
    return this.http.get<Articles[]>(this.baseUrl)
  }

  
}
