import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FinderComponent } from './finder/finder.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'recipe/:title', component: RecipeDetailComponent},
  { path: 'all-recipes', component: AllRecipesComponent },
  { path: 'finder', component: FinderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
