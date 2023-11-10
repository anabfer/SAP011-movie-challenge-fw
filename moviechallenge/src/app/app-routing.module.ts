import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieContainerComponent } from './components/pages/home/movie-container/movie-container.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./components/pages/movie-details/movie-details.module').then(m => m.MovieDetailsModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
