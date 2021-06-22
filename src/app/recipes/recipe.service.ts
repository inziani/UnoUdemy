import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";


export class RecipeService{

  public outRecipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Croissant',
      'Micheal Roux recipe',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Croissant_%28Michel_Roux_recipe%29_%285676275698%29.jpg/800px-Croissant_%28Michel_Roux_recipe%29_%285676275698%29.jpg',
      [
        new Ingredient( 'Sugar', 10, 'Cups'),
        new Ingredient( 'Butter', 15, 'Grams'),
        new Ingredient( 'Wheat Flour', 2, 'Cups')
      ]),
    new Recipe(
      'Fish',
      'Dried Fish', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Dried_fish_Recipe.jpg/800px-Dried_fish_Recipe.jpg',
      [
        new Ingredient('Fish', 10, 'Pieces'),
        new Ingredient('Salt', 5, 'Teaspoon Fulls'),
        new Ingredient('Water', 10, 'Mls')
      ]),
    new Recipe(
      'Brisket',
      'Pass Over Brisket',
      'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21.jpg',
      [
        new Ingredient('Beef', 500, 'Grams'),
        new Ingredient('Oil', 10, 'Mls'),
        new Ingredient('Oregano', 10, 'Grams')
      ]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
