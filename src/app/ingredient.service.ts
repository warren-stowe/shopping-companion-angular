import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from './models/ingredient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/ingredients/';
  }

  createIngredient(ingredient: Ingredient) {
    return this.http.post<Ingredient>(this.baseUrl + 'add', ingredient);
  }

  getIngredientsByName(ingredientName: string): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.baseUrl + ingredientName);
  }  
}
