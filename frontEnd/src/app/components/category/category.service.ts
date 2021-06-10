import { Articles } from './../article/article.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  baseUrl = "http://localhost:8080/categories"

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
  create(category: Category): Observable<Category>{
    return this.http.post<Category>(`${this.baseUrl}/create`, category)
  }

  //lendo
  read(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl)
  }

  //lendo
  readById(id: any): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}/buscar/${id}`)
  }

  //lendo
  readById2(article: Articles): Observable<Category[]>{
    console.log(article)
    return this.http.get<Category[]>(`${this.baseUrl}/buscar/${article.categoryId}`)
  }

  
}
