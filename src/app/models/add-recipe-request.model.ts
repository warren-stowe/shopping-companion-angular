import { IngredientQuantity } from "./ingredient-quantity.model";
import { Recipe } from "./recipe.model";

export class AddRecipeRequest {

    recipe: Recipe;
    ingredientQuantities: IngredientQuantity[];

    constructor(recipe: Recipe, ingredientQuantities: IngredientQuantity[]) {
        this.recipe = recipe;
        this.ingredientQuantities = ingredientQuantities;
    }

    addIngredient(ingredient: IngredientQuantity) {
        this.ingredientQuantities.push(ingredient);
    }
}