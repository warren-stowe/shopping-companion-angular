import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeListRequest } from '../models/recipe-list-request.model';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/list/recipes';
  }

  getShoppingList(recipeIds: Number[]) {
    const recipeListRequest = { "recipeIds": recipeIds };
    console.log("Calling");
    this.http.post('http://localhost:8080/list/recipes', recipeListRequest).subscribe();
    // this.shoppingService.getShoppingList(this.request);
    console.log("After");
  }

  getRecipesByName(recipeName: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>("http://localhost:8080/recipes/search/" + recipeName);
  }  
}