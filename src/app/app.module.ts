import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { DatePipe } from '@angular/common';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AppRoutingModule } from './app-routing.module';
import { DemoMaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { BooksListComponent } from './books-list/books-list.component';
import { PostBookComponent } from './post-book/post-book.component';
import { UsePageComponent } from './use-page/use-page.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { ShowUploadsComponent } from './show-uploads/show-uploads.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TestComponent,HeaderComponent, FiltersComponent, BooksListComponent, PostBookComponent, UsePageComponent, ShowBookComponent, ShowUploadsComponent, Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialFileInputModule,
    DemoMaterialModule

    
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
