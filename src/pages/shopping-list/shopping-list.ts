import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from '../../services/shopping-list';
import { Ingrediant } from '../../models/ingrediant';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  shoppingList: Ingrediant[];

  constructor(private shoppingListService: ShoppingListService) {}

  ionViewWillEnter() {
    this.loadItems();
  }
  
  onAddItem(form: NgForm) {
    this.shoppingListService.addItem(form.value.ingrediantName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  private loadItems() {
    this.shoppingList = this.shoppingListService.getItems();
  }
}
