import {
  Component,
  Input,
  OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() inRecipe!: Recipe;
  @Input() index!: number;
  // @Output() outRecipeSelected = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit(): void {

  }

  // onSelected(){
  //   this.recipeService.outRecipeSelected.emit(this.inRecipe);

  // }

}
