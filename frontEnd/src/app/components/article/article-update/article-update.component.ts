import { Category } from '../../category/category.model';
import { CategoryService } from './../../category/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {

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


  updateArticle(): void {
      this.articleServer.update(this.articles).subscribe(() => {
        this.articleServer.showMessage("Artigo Atualizado com sucesso");
        this.router.navigate(['/article/read']);
      });
    }

  cancel(): void {
    this.router.navigate(['/article/read']);
  }OnInit(): void {
  }

}
