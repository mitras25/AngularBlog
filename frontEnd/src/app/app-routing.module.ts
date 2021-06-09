import { ArticleLeituraComponent } from './components/article/article-leitura/article-leitura.component';
import { ListLogoutComponent } from './layout/list-logout/list-logout.component';
import { AuthGuard } from './account/shared/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';
import { ArticleCrudComponent } from './views/article-crud/article-crud/article-crud.component';
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
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  {path: '',
  component: LayoutHomeComponent,
  children:[
     {path: '',component: HomeComponent },
  {path: 'usuarios',component: UsuarioCrudComponent},
  //{path: 'usuarios/create',component: UsuarioCreateComponent},
  {path: 'category', component: CategoryCrudComponent},
  {path: 'category/create',component: CategoryCreateComponent},
  {path: 'category/read',component: CategoryReadComponent},
  {path: 'category/delete',component: CategoryDeleteComponent},
  {path: 'article',component: ArticleCrudComponent},
  {path: 'article/create',component: ArticleCreateComponent},
  {path: 'article/read', component: ArticleReadComponent},
  {path: 'article/delete/:id', component: ArticleDeleteComponent},
  {path: 'article/update/:id',component: ArticleUpdateComponent},
  ],
  //verificando se esta logado
  canActivate: [AuthGuard]
  },
  {path: "",
component: AuthenticationComponent,
children: [
  {path: '', redirectTo: 'lista', pathMatch:'full'},
  {path: 'lista', component: ListLogoutComponent},
  {path: 'login', component:LoginComponent},
  {path: 'usuarios/create',component: UsuarioCreateComponent},
  {path: 'article/leitura/:id',component: ArticleLeituraComponent},
]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
