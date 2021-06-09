import { Articles } from '../../components/article/article.model';
  import { Component, OnInit } from '@angular/core';
  import { ArticleService } from '../../components/article/article.service';

@Component({
  selector: 'app-list-logout',
  templateUrl: './list-logout.component.html',
  styleUrls: ['./list-logout.component.css']
})
export class ListLogoutComponent implements OnInit {
  
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
  

