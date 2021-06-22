import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  public ingredientAdded = new EventEmitter<Ingredient[]>();


  private ingredients: Ingredient[]= [
    new Ingredient('Royco Cubes', 10, 'Pieces'),
    new Ingredient('Bread', 12, 'Pieces')
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice())


  }



}
