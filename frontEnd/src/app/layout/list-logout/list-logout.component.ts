import { Category } from './../../components/category/category.model';
import { UsuarioService } from './../../components/usuarios/usuario.service';
import { CategoryService } from './../../components/category/category.service';
import { Articles } from '../../components/article/article.model';
  import { Component, OnInit } from '@angular/core';
  import { ArticleService } from '../../components/article/article.service';

@Component({
  selector: 'app-list-logout',
  templateUrl: './list-logout.component.html',
  styleUrls: ['./list-logout.component.css']
})
export class ListLogoutComponent implements OnInit {
  
    category: Category[] = []
    articles: Articles[] = [];
    displayedColumns = ['id', 'title', 'categoryId', 'userId', 'createdAtdata', 'action']
  
    constructor(
      private articleService: ArticleService, 
      private categoryService: CategoryService,
      private usuarioService: UsuarioService
      ) {}
  
    ngOnInit(): void {
      this.articleService.read().subscribe((article) => {
        this.articles = article;
      });

     
      
    }
  
  }
  

