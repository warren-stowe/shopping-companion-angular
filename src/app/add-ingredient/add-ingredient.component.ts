
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { IngredientService } from '../services/ingredient.service';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatButtonModule} from '@angular/material/button';
// import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
})
export class AddIngredientComponent implements OnInit {

  ingredientForm: FormGroup;
  similarIngredientNames: Ingredient[];
  aisleOptions: string[];

  constructor(private formBuilder: FormBuilder, private ingredientService: IngredientService) { 
    this.ingredientForm = new FormGroup({
      ingredientName: new FormControl('', [Validators.required]),
      aisle: new FormControl('', [Validators.required])
      
    });

    this.aisleOptions = ["Baking", "Bread", "Canned", "Dairy", "Frozen", "International", "Meat", 
                        "Miscellaneous", "Produce", "Seafood", "Spices"];
    
    this.similarIngredientNames = [];
    // this.similarIngredientNames[0] = new Ingredient(1, "Beef", "Meat");
    // this.similarIngredientNames[1] = new Ingredient(2, "Turket", "Meat");
    // this.similarIngredientNames[2] = new Ingredient(3, "Bread", "Bread");
  }

  ngOnInit() {
      this.ingredientForm.get('ingredientName')?.valueChanges.subscribe(value => {
        this.getIngredientsByName(value);
      });
  }

  onSubmit() {
    console.log(this.ingredientForm);
    this.ingredientService.createIngredient(this.ingredientForm.value)
      .subscribe(response => {
        console.log(response);
        // show success message or redirect to another page here
      }, error => {
        console.error(error);
        // show error message here
      });
  }

  clear() {
    this.ingredientForm.setValue({ ingredientName: '', aisle: '' });
    this.similarIngredientNames = [];
  }

  getIngredientsByName(ingredientName: string) {

    if (ingredientName.length >= 3) {

      // this.similarIngredientNames = [];
  
      let response: Observable<Ingredient[]>;
      response = this.ingredientService.getIngredientsByName(ingredientName);
      console.log(response);
  
      response.subscribe(data => {
        this.similarIngredientNames = data;
      });
  
      console.log(this.similarIngredientNames);
    }

  }


}


