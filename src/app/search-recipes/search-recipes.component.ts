import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Observable } from 'rxjs';
import { ShoppingService } from '../services/shopping.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeFilterPipe } from '../helpers/recipe-filter.pipe';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent {

  recipeName: FormControl;
  similarRecipes: Recipe[];
  recipeIds: Number[];

  recipes = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Lasagna' },
    { id: 3, name: 'Hamburger' }
  ];

  
  
  constructor(private http: HttpClient, private shoppingService: ShoppingService) { 
    this.recipeIds = [];
    this.recipeName = new FormControl('', Validators.required);
    this.similarRecipes = [];
  }
  
  ngOnInit() {
    this.recipeName.valueChanges.subscribe(value => {
      this.getRecipesByName(value);
    })
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

  getRecipesByName(recipeName: string) {

    if (recipeName.length >= 3) {

      // this.similarIngredientNames = [];
  
      let response: Observable<Recipe[]>;
      response = this.shoppingService.getRecipesByName(recipeName);
      console.log(response);
  
      response.subscribe(data => {
        this.similarRecipes = data;
      });
  
      console.log(this.similarRecipes);
    }
  }

  addToList(recipe: Recipe) {
    this.recipeIds.push(recipe.id);
    console.log(this.recipeIds);
  }
}

