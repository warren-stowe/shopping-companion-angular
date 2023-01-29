export class RecipeListRequest {

    recipeIds: Number[];

    constructor(recipeIds: Number[]) {
        this.recipeIds = recipeIds;
    }
}