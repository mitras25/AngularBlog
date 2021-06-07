import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-crud',
  templateUrl: './article-crud.component.html',
  styleUrls: ['./article-crud.component.css']
})
export class ArticleCrudComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToArticleCreate(): void {
    this.router.navigate(['/article/create']);
  }

}
