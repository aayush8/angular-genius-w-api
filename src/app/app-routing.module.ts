import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {ArtistComponent} from './components/artist/artist.component'
import {ResultComponent} from './components/result/result.component'


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"artist/:id", component: ArtistComponent},
  {path:"result/:id", component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
