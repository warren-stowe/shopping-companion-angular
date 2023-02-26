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
    this.baseUrl = 'http://localhost:8080/recipes/test';
  }

  public callTest() {
    return this.http.get<string>(this.baseUrl);
  }  

  getRecipesByName(recipeName: string): Observable<Recipe[]> {
    let response = this.http.get<Recipe[]>("http://localhost:8080/recipes/search/" + recipeName);
    console.log("In Service: ");
    console.log(response);
    return response;
  }  
}
