import { Articles } from './../article.model';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {

  articles: Articles[] = [];
  displayedColumns = ['id', 'title', 'categoryId', 'userId', 'createdAtdata', 'action']

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.read().subscribe((article) => {
      this.articles = article;
      console.log(article)
    });
  }

}
