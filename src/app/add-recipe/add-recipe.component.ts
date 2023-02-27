import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { FormControl, FormGroup, FormArray, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  recipeForm: FormGroup;
  ingredientForm: FormGroup;
  ingredients: Array<object> = [];
  display: Array<string> = [];

  constructor(private recipeService: RecipeService) { 
    this.recipeForm = new FormGroup({
      recipeName: new FormControl('', Validators.required),
      source: new FormControl('', Validators.required),
      sourcePage: new FormControl('', Validators.required)
    })

    this.ingredientForm = new FormGroup({
      ingredientName: new FormControl('', Validators.required),
      aisle: new FormControl('', Validators.required),
      amount: new FormControl(1, Validators.required),
      measurement: new FormControl('', Validators.required),
      optional: new FormControl(false, Validators.required)
    })

   }
  

  onSubmit() {

    let request = {
      recipe: {
        recipeName: this.recipeForm.get('recipeName')?.value,
        source: this.recipeForm.get('source')?.value,
        sourcePage: this.recipeForm.get('sourcePage')?.value
      },
      ingredientQuantities: this.ingredients
    }

    let response = this.recipeService.addRecipe(request).subscribe();
    let stringy = JSON.stringify(request);
    console.log("In component: ");
    console.log(stringy);
    console.log(response);
  }

  addIngredient() {
    let quantity = {
      amount: this.ingredientForm.get('amount')?.value,
      measurement: this.ingredientForm.get('measurement')?.value,
      optional: this.ingredientForm.get('optional')?.value
    }

    let ingredient = {
      id: 0,
      ingredientName: this.ingredientForm.get('ingredientName')?.value,
      aisle: this.ingredientForm.get('aisle')?.value,
    }

    let ingredientQuantity = {
      ingredient: ingredient,
      quantity: quantity
    }

    this.ingredients.push(ingredientQuantity);
    this.display.push(ingredient.ingredientName);
    console.log(this.ingredients);

    this.clearIngredient();
  }

  clearIngredient() {
    this.ingredientForm.reset();
  }

  resetForm() {
    this.clearIngredient();
    this.recipeForm.reset();
    this.ingredients = [];
    this.display = [];
  }
}