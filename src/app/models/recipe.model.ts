export class Recipe {

    id: number;
    recipeName: string;
    source: string;
    sourcePage: string;

    constructor(id: number, recipeName: string, source: string, sourcePage: string) {
        this.id = id;
        this.recipeName = recipeName;
        this.source = source;
        this.sourcePage = sourcePage;
    }
}