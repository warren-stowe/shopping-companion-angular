import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Observable } from 'rxjs';
import { ShoppingService } from '../shopping.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeFilterPipe } from '../helpers/recipe-filter.pipe';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent {

  recipeControl: FormControl;
  recipeIds: Number[];

  recipes = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Lasagna' },
    { id: 3, name: 'Hamburger' }
  ];

  
  
  constructor(private http: HttpClient, private shoppingService: ShoppingService) { 
    this.recipeIds = [1, 2];
    this.recipeControl = new FormControl('');
  }
  
  ngOnInit() {
  }

  onSubmit() {
    // const recipeIds = [1, 2];
    // const recipeListRequest = { "recipeIds": this.recipeIds };
    // console.log("Calling");
    // this.http.post('http://localhost:8080/list/recipes', recipeListRequest).subscribe();
    // // this.shoppingService.getShoppingList(this.request);
    // console.log("After");

    this.shoppingService.getShoppingList(this.recipeIds);
  }

  // searchRecipes() {
  //   this.recipes = 
  // }

  addRecipe(recipe: Number) {
    this.recipeIds.push(recipe);
  }

  removeRecipe(recipe: Number) {
    this.recipeIds = this.recipeIds.filter(r => r !== recipe);
  }
}

