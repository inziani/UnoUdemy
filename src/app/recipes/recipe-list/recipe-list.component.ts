import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() landedRecipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Croissant', 'Micheal Roux recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Croissant_%28Michel_Roux_recipe%29_%285676275698%29.jpg/800px-Croissant_%28Michel_Roux_recipe%29_%285676275698%29.jpg'),
    new Recipe('Fish', 'Dried Fish', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Dried_fish_Recipe.jpg/800px-Dried_fish_Recipe.jpg'),
    new Recipe('Brisket', 'Pass Over Brisket', 'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  inRecipeSelected(recipe: Recipe){
    this.landedRecipeSelected.emit(recipe);


  }

}
