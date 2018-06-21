import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'database-options',
  templateUrl: 'database-options.html',
})
export class DatabaseOptionsPage {
  constructor(private viewCtrl: ViewController) {}

  onAction(action: string) {
    this.viewCtrl.dismiss({action: action});
  }
}
