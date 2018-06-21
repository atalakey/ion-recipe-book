import { Component } from '@angular/core';
import { IonicPage, PopoverController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from '../../services/shopping-list';
import { Ingrediant } from '../../models/ingrediant';
import { ShoppingListOptionsPage } from './shopping-list-options/shopping-list-options';
import { AuthService } from '../../services/auth';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  shoppingList: Ingrediant[];

  constructor(private popoverCtrl: PopoverController,
              private shoppingListService: ShoppingListService,
              private authService: AuthService) {}

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

    popover.onDidDismiss((data) => {
      if(data.action == 'load') {

      } else {
        this.authService.getActiveUser().getIdToken()
          .then((token: string) => {
            this.shoppingListService.storeList(token).subscribe(
              () => console.log('Success!'),
              error => console.log(error)
            );
          });
      }
    })
  }

  private loadItems() {
    this.shoppingList = this.shoppingListService.getItems();
  }
}
