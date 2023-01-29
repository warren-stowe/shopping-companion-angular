import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'recipeFilter'
})

export class RecipeFilterPipe implements PipeTransform {
    transform(recipes: any[], value: string): any[] {
        return recipes.filter(recipe => recipe.name.toLowerCase().includes(value.toLowerCase()));
    }
}