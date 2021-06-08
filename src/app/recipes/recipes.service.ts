import {
  EventEmitter,
  Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'The first recipe',
      'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21.jpg'),
    new Recipe(
      'A test recipe',
      'The second recipe',
      'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21.jpg')
];

  getRecipes(){
    return this.recipes.slice();
  }

  constructor() { }
}
