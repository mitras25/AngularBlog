import { Category } from '../../category/category.model';
import { CategoryService } from './../../category/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-leitura',
  templateUrl: './article-leitura.component.html',
  styleUrls: ['./article-leitura.component.css']
})
export class ArticleLeituraComponent implements OnInit {

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
  })

  this.categoryService.read().subscribe((categories) => {
    this.categories = categories;
  });
}

  voltar(): void {
    this.router.navigate(['']);
  }OnInit(): void {
  }

}
