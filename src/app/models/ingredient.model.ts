export class Ingredient {
    id: number;
    ingredientName: string;
    aisle: string;

    constructor(id: number, ingredientName: string, aisle: string) {
        this.id = id;
        this.ingredientName = ingredientName;
        this.aisle = aisle;
    }
}