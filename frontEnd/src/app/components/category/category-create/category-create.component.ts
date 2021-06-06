import { Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Category } from './../category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
category: Category = {
  title: ""
}

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  createCategory(): void {
    this.categoryService.create(this.category).subscribe(() => {
      this.categoryService.showMessage('Cadastrado com sucesso front');
      this.router.navigate(['/category']);
    });
  }

  cancel(): void {
    this.router.navigate(['/category']);
  }

}
