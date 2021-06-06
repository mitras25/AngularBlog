import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css'],
})
export class CategoryReadComponent implements OnInit {
  categories: Category[] = [];
  displayedColumns = ['id', 'title']

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.read().subscribe((categories) => {
      this.categories = categories;
      console.log(categories);
    });
  }
}
