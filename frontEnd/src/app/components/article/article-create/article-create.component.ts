import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../category/category.model';
import { CategoryService } from '../../category/category.service';
import { Articles } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
})
export class ArticleCreateComponent implements OnInit {
  article: Articles = {
    title: '',
    body: '',
    idUser: 1,
    idCategory: null
  }
  selectedValue: [] = []
 

  categories: Category[] = [];


  constructor(
    private articleService: ArticleService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.read().subscribe((categories) => {
      this.categories = categories;
    });
  }


  createArticle(): void {
    
    console.log( this.article)
    // this.articleService.create(this.article).subscribe(() => {
    //   this.articleService.showMessage('Cadastrado com sucesso front');
    //   this.router.navigate(['/article']);
    // });
  }

  cancel(): void {
    this.router.navigate(['/article']);
  }
}
