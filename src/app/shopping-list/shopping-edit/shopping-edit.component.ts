import {
  Component,
  ElementRef,
  OnInit,
  ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput', { static: false }) ingredientNameInput!: ElementRef;
  @ViewChild('ingredientAmountInput', { static: false}) ingredientAmountInput!: ElementRef;
  @ViewChild('ingredientUomInput', { static: false}) ingredientUomInput!: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingName = this.ingredientNameInput.nativeElement.value;
    const ingAmount = this.ingredientAmountInput.nativeElement.value;
    const ingUoM = this.ingredientUomInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingUoM);
    this.shoppingListService.addIngredient(newIngredient);


  }

}
