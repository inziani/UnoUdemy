import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput', { static: false }) ingredientNameInput!: ElementRef;
  @ViewChild('ingredientAmountInput', { static: false}) ingredientAmountInput!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingName = this.ingredientAmountInput.nativeElement.value;
    const ingAmount = this.ingredientAmountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);


  }

}
