import { Component } from '@angular/core';
import { IonicPage, PopoverController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from '../../services/shopping-list';
import { Ingrediant } from '../../models/ingrediant';
import { ShoppingListOptionsPage } from './shopping-list-options/shopping-list-options';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  shoppingList: Ingrediant[];

  constructor(private popoverCtrl: PopoverController,
              private shoppingListService: ShoppingListService) {}

  ionViewWillEnter() {
    this.loadItems();
  }
  
  onAddItem(form: NgForm) {
    this.shoppingListService.addItem(form.value.ingrediantName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  onCheckItem(index: number) {
    this.shoppingListService.removeItem(index);
    this.loadItems();
  }

  onShowOptions(event: MouseEvent) {
    const popover = this.popoverCtrl.create(ShoppingListOptionsPage);
    popover.present({ev: event});
  }

  private loadItems() {
    this.shoppingList = this.shoppingListService.getItems();
  }
}
