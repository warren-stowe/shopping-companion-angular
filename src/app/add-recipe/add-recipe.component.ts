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
    
    let response = this.recipeService.callTest().subscribe();
    console.log("In component: ");
    console.log(response);
  }
}