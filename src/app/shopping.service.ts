import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeListRequest } from './models/recipe-list-request.model';

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
}