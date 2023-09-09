import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  {path: "https://devitorgabriel.github.io/to-do-list/", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
