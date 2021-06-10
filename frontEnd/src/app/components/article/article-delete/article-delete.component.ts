import { Category } from '../../category/category.model';
import { CategoryService } from './../../category/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from '../article.model';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.css'],
})
export class ArticleDeleteComponent implements OnInit {
  articles: Articles = {
    title: '',
    body: '',
    userId: null,
    categoryId: null
  }

  categories: Category[] = []



  displayedColumns = [
    'id',
    'title',
    'categoryId',
    'userId',
    'createdAtdata',
    'action',
  ];

  constructor(
    private articleServer: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')
  this.articleServer.readById(id).subscribe(article =>{
    this.articles = article
    const idCat = article.categoryId 

  this.categoryService.readById(idCat).subscribe(categories =>{
    this.categories = categories
  })
  })
}


  deleteArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.articleServer.delete(id).subscribe(() => {
      this.articleServer.showMessage('Item Excluido com sucesso');
      this.router.navigate(['/article/read']);
    });
  }

  cancel(): void {
    this.router.navigate(['/article/read']);
  }
}

