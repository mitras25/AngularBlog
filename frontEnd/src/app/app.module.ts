import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryReadComponent } from './components/category/category-read/category-read.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { ArticleCreateComponent } from './components/article/article-create/article-create.component';
import { ArticleReadComponent } from './components/article/article-read/article-read.component';
import { ArticleDeleteComponent } from './components/article/article-delete/article-delete.component';
import { ArticleUpdateComponent } from './components/article/article-update/article-update.component';
import { CategoryCrudComponent } from './views/category-crud/category-crud/category-crud.component';
import { ArticleCrudComponent } from './views/article-crud/article-crud/article-crud.component';
import { CategoryRead2Component } from './components/category/category-read2/category-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UsuarioCrudComponent,
    UsuarioCreateComponent,
    CategoryCreateComponent,
    CategoryReadComponent,
    CategoryDeleteComponent,
    ArticleCreateComponent,
    ArticleReadComponent,
    ArticleDeleteComponent,
    ArticleUpdateComponent,
    CategoryCrudComponent,
    ArticleCrudComponent,
    CategoryRead2Component,
    LoginComponent,
    AuthenticationComponent,
    LayoutHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
