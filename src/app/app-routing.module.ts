import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuard } from './shared/auth.guard';

const appRoutes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'all'},
  {path: 'login', component: LoginComponent},
  {path: 'movie-list', component: MovieListComponent, canActivate:[AuthGuard]},
  {path: 'movie-details/:id', component: MovieDetailsComponent,canActivate:[AuthGuard]},
  { path: '**', component: PageNotFoundComponent}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
