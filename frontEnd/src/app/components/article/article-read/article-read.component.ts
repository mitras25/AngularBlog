import { Articles } from './../article.model';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import jwt from 'jwt-decode'

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
    const token = localStorage.getItem("token");
    const user = token ? jwt(token) : null

    this.articleService.myArticles(user).subscribe((article) => {
      this.articles = article;
    });
  }

}
