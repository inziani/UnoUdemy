import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];
  private ingChangeSubs!: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {

    this.ingredients = this.shoppingListService.getIngredients();
    this.ingChangeSubs = this.shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients
      }

    )
  }
  ngOnDestroy(): void{

  this.ingChangeSubs.unsubscribe();

  }


}
