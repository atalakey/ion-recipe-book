import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shopping-list-options',
  templateUrl: 'shopping-list-options.html',
})
export class ShoppingListOptionsPage {
  constructor(private viewCtrl: ViewController) {}

  onAction(action: string) {
    this.viewCtrl.dismiss({action: action});
  }
}
