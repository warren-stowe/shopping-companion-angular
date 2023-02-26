import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/recipes/';
  }

  public callTest() {
    return this.http.get<string>(this.baseUrl);
  }  



  getRecipesByName(recipeName: string): Observable<Recipe[]> {
    let response = this.http.get<Recipe[]>("search/" + recipeName);
    console.log("In Service: ");
    console.log(response);
    return response;
  }  

  addRecipe(addRecipeRequest: any) {
    let response = this.http.post<string>(this.baseUrl + "add", addRecipeRequest);
    return response;
  }
}
