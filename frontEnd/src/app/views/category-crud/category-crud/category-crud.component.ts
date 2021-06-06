import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.css'],
})
export class CategoryCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToCategoryCreate(): void {
    this.router.navigate(['/category/create']);
  }
}
