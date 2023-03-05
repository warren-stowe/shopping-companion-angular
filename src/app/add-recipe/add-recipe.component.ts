import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { FormControl, FormGroup, FormArray, FormsModule } from '@angular/forms';
import { Ingredient } from '../models/ingredient.model';
import { IngredientService } from '../services/ingredient.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  recipeForm: FormGroup;
  ingredientForm: FormGroup;
  ingredient: Ingredient;
  ingredients: Array<object> = [];
  display: Array<string> = [];
  similarIngredients: Array<Ingredient> = [];
  isExistingIngredient: boolean = false;


  constructor(private recipeService: RecipeService, 
    private ingredientService: IngredientService) { 
    this.recipeForm = new FormGroup({
      recipeName: new FormControl('', Validators.required),
      source: new FormControl('', Validators.required),
      sourcePage: new FormControl('', Validators.required)
    })

    this.ingredientForm = new FormGroup({
      id: new FormControl(0),
      ingredientName: new FormControl('', Validators.required),
      aisle: new FormControl('', Validators.required),
      amount: new FormControl(1, Validators.required),
      measurement: new FormControl('', Validators.required),
      optional: new FormControl(false, Validators.required)
    })

    this.ingredient = new Ingredient(0, '', '');
   }

   ngOnInit() {
    this.ingredientForm.get('ingredientName')?.valueChanges.subscribe(value => {
      this.getIngredientsByName(value);
    });
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

    if (!this.isExistingIngredient) {
      this.ingredient.id = 0;
      this.ingredient.ingredientName = this.ingredientForm.get('ingredientName')?.value;
      this.ingredient.aisle = this.ingredientForm.get('aisle')?.value;
    }

    let ingredientQuantity = {
      ingredient: this.ingredient,
      quantity: quantity
    }

    this.ingredients.push(ingredientQuantity);
    this.display.push(this.ingredient.ingredientName);
    console.log(this.ingredients);

    this.clearIngredient();
  }

  clearIngredient() {
    this.ingredientForm.reset();
    this.ingredient = new Ingredient(0, '', '');
    this.isExistingIngredient = false;
  }

  resetForm() {
    this.clearIngredient();
    this.recipeForm.reset();
    this.ingredients = [];
    this.display = [];
  }

  getIngredientsByName(ingredientName: string) {

    if (ingredientName.length >= 3) {

      let response: Observable<Ingredient[]>;
      response = this.ingredientService.getIngredientsByName(ingredientName);
      console.log(response);
  
      response.subscribe(data => {
        this.similarIngredients = data;
      });
  
      console.log(this.similarIngredients);
    }
  }

  addExistingIngredient(ingredient: Ingredient) {
    this.clearIngredient();
    console.log(JSON.stringify(ingredient));

    this.ingredient.id = ingredient.id;
    this.ingredient.ingredientName = ingredient.ingredientName;
    this.ingredient.aisle = ingredient.aisle;
    this.isExistingIngredient = true;
    // this.ingredientForm.get('id')?.setValue(ingredient.id);
    // this.ingredientForm.get('ingredientName')?.setValue(ingredient.ingredientName);
    // this.ingredientForm.get('aisle')?.setValue(ingredient.aisle);
    // this.ingredientForm.setValue({id: ingredient.id});
    // this.ingredientForm.setValue({ingredientName: ingredient.ingredientName});
    // this.ingredientForm.setValue({aisle: ingredient.aisle});
    // console.log("addExistingIngredient");
    // console.log(this.ingredientForm);
  }
}