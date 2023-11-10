import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: '', component: MovieContainerComponent },
  { path: 'page/:pageNumber', component: MovieContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
