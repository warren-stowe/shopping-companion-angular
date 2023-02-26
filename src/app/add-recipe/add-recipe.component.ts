import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  constructor(private recipeService: RecipeService) {  }
  

  onSubmit() {

    let request = {
      recipe: {
        recipeName: 'Hamburgers2',
        source: 'Warren',
        sourcePage: '0'
      },
      ingredientQuantities: [
          
          {
              ingredient: {
                  id: 3,
                  ingredient: "ketchup",
                  aisle: "condiments"
              },
              quantity: {
                  amount: 1,
                  measurement: "units",
                  optional: false
              }
          }          ,
          {
              ingredient: {
                  id: 4
              },
              quantity: {
                  amount: 1,
                  measurement: "units",
                  optional: false
              }
          },
          {
              ingredient: {
                  id: 5
              },
              quantity: {
                  amount: 1,
                  measurement: "units",
                  optional: true
              }
          },{
              ingredient: {
                  id: 7
              },
              quantity: {
                  amount: 8,
                  measurement: "units",
                  optional: false
              }
          },
          {
              ingredient: {
                  id: 8
              },
              quantity: {
                  amount: 8,
                  measurement: "units",
                  optional: false
              }
          },
          {
            ingredient: {
              id: 0,
              ingredientName: "Pineapple",
              aisle: "Produce"
            },
            quantity: {
              amount: 1,
              measurement: "units",
              optional: true
            }
          }
      ]
    }

    // let addRecipeRequest = JSON.stringify(request);
    let response = this.recipeService.addRecipe(request).subscribe();
    console.log("In component: ");
    console.log(response);
  }
}