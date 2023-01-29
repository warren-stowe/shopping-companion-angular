import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';

const routes: Routes = [
  { path: 'ingredients', component: AddIngredientComponent },
  { path: 'recipes', component: AddRecipeComponent },
  { path: 'search', component: SearchRecipesComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
