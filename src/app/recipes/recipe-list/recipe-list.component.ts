import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
     new Recipe('A test recipe', 'A Test desc', 'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21.jpg'),
      new Recipe('A test recipe', 'A Test desc', 'https://static.timesofisrael.com/atlantajewishtimes/uploads/2021/03/Passover-Recipe_-Brisket_3-15-21.jpg')
  ];

  constructor() { }

  ngOnInit(): void {

  }

  // newRecipe(name: string, desc: string, imagePath: string){
  //   this.recipes = [new Recipe("", "", "")]

  // }

}
