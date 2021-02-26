import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { FiltersComponent } from './filters/filters.component';
import { BooksListComponent } from './books-list/books-list.component';
import { PostBookComponent } from './post-book/post-book.component';
import { UsePageComponent } from './use-page/use-page.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { ShowUploadsComponent } from './show-uploads/show-uploads.component';

const routes: Routes = [
  { path: 'login', component:LoginPageComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'test', component:TestComponent},
  { path: 'filters', component:FiltersComponent},
  { path: 'booksList', component:BooksListComponent},
  { path: 'postBook', component:PostBookComponent},
  { path: 'userPage', component:UsePageComponent},
  { path: 'showBook', component:ShowBookComponent},
  { path: 'showUploads', component:ShowUploadsComponent}
  

    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
