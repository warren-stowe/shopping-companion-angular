import { Ingredient } from "./ingredient.model";
import { Quantity } from "./quantity.model";

export class IngredientQuantity {

    ingredient: Ingredient;
    quantity: Quantity;

    constructor(ingredient: Ingredient, quantity: Quantity) {
        this.ingredient = ingredient;
        this.quantity = quantity;
    }
}