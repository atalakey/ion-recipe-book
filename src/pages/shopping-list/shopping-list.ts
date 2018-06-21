import { Component } from '@angular/core';
import { IonicPage, PopoverController, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from '../../services/shopping-list';
import { Ingrediant } from '../../models/ingrediant';
import { AuthService } from '../../services/auth';
import { DatabaseOptionsPage } from '../database-options/database-options';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  shoppingList: Ingrediant[];

  constructor(private popoverCtrl: PopoverController,
              private shoppingListService: ShoppingListService,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {}

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
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    const popover = this.popoverCtrl.create(DatabaseOptionsPage);
    popover.present({ev: event});

    popover.onDidDismiss((data) => {
      if(data.action == 'load') {
        loading.present();
        this.authService.getActiveUser().getIdToken()
          .then((token: string) => {
            this.shoppingListService.fetchList(token).subscribe(
              (shoppingList: Ingrediant[]) => {
                loading.dismiss();
                if(shoppingList) {
                  this.shoppingList = shoppingList;
                } else {
                  this.shoppingList = [];
                }
                console.log('Success!');
              },
              error => {
                loading.dismiss();
                this.handleError(error.message);
              }
            );
          });
      } else if(data.action == 'store') {
        loading.present();
        this.authService.getActiveUser().getIdToken()
          .then((token: string) => {
            this.shoppingListService.storeList(token).subscribe(
              () => {
                loading.dismiss();
                console.log('Success!');
              },
              error => {
                loading.dismiss();
                this.handleError(error.message);
              }
            );
          });
      }
    })
  }

  private loadItems() {
    this.shoppingList = this.shoppingListService.getItems();
  }

  private handleError(errorMessage: string) {
    const alert = this.alertCtrl.create({
      title: 'An error occurred!',
      message: errorMessage,
      buttons: ['Ok']
    });
    alert.present();
  }
}
