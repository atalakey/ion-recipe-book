import { Recipe } from "../models/recipe";
import { Ingrediant } from "../models/ingrediant";

export class RecipesService {
  private recipes: Recipe[] = [];

  addRecipe(title: string, description: string, difficulty: string, ingrediants: Ingrediant[]) {
    this.recipes.push(new Recipe(title, description, difficulty, ingrediants));
    console.log(this.recipes); 
  }

  getRecipes() {
    return this.recipes.slice();
  }

  updateRecipe(index: number, title: string, description: string, difficulty: string, ingrediants: Ingrediant[]) {
      this.recipes[index] = new Recipe(title, description, difficulty, ingrediants);
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}