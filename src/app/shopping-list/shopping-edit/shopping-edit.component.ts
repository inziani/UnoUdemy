import {
  Component,
  ElementRef,
  OnInit,
  ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amtInput') amountInputRef: ElementRef;

  constructor(nameInputRef: ElementRef, amountInputRef: ElementRef,  private slService: ShoppingListService, ) {
    this.nameInputRef = nameInputRef;
    this.amountInputRef = amountInputRef;
  }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingQuantity = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingQuantity);
    this.slService.addIngredient(newIngredient);
  }

}
