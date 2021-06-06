import { ArticleUpdateComponent } from './components/article/article-update/article-update.component';
import { ArticleDeleteComponent } from './components/article/article-delete/article-delete.component';
import { ArticleReadComponent } from './components/article/article-read/article-read.component';
import { ArticleCreateComponent } from './components/article/article-create/article-create.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { CategoryReadComponent } from './components/category/category-read/category-read.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { HomeComponent } from './views/home/home.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCrudComponent } from './views/category-crud/category-crud/category-crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'usuarios',
    component: UsuarioCrudComponent,
  },
  {
    path: 'usuarios/create',
    component: UsuarioCreateComponent,
  },
  {
    path: 'category',
    component: CategoryCrudComponent,
  },
  {
    path: 'category/create',
    component: CategoryCreateComponent,
  },
  {
    path: 'category/read',
    component: CategoryReadComponent,
  },
  {
    path: 'category/delete',
    component: CategoryDeleteComponent,
  },
  {
    path: 'article/create',
    component: ArticleCreateComponent,
  },
  {
    path: 'article/read',
    component: ArticleReadComponent,
  },
  {
    path: 'article/delete',
    component: ArticleDeleteComponent,
  },
  {
    path: 'article/update',
    component: ArticleUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
