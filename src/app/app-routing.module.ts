import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuard } from './shared/auth.guard';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'movie-list', component: MovieListComponent, canActivate:[AuthGuard]},
  {path: 'movie-details', component: MovieDetailsComponent,canActivate:[AuthGuard]},
  { path: '',   redirectTo: '/movie-list', pathMatch: 'full' }, // redirect to `Movie List component`
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
