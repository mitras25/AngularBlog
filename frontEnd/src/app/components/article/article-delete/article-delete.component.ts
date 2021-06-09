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
    idUser: null,
    idCategory: null
  }


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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')
  this.articleServer.readById(id).subscribe(article =>{
    this.articles = article
    console.log('pagina de delete')
    console.log(this.articles)
  })
}


  deleteArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.articleServer.delete(id).subscribe(() => {
      this.articleServer.showMessage('Item Excluido com sucesso');
      this.router.navigate(['/articles/read']);
    });
  }

  cancel(): void {
    this.router.navigate(['/articles/read']);
  }
}

