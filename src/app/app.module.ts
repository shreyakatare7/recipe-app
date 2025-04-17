import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FormsModule } from '@angular/forms';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FinderComponent } from './finder/finder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RecipeCardComponent,
    RecipeDetailComponent,
    AllRecipesComponent,
    FinderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
