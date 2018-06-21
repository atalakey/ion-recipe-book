import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AuthService } from "./auth";
import { Ingrediant } from "../models/ingrediant";

import {firebaseConfig} from '../app/firebase-config';

@Injectable()
export class ShoppingListService {
  private ingrediants: Ingrediant[] = [];

  constructor(private http: HttpClient,
              private authService: AuthService) {}

  addItem(name: string, amount: number) {
    this.ingrediants.push(new Ingrediant(name, amount));
    console.log(this.ingrediants);
  }

  addItems(items: Ingrediant[]) {
    this.ingrediants.push(...items);
  }

  getItems() {
    return this.ingrediants.slice();
  }

  removeItem(index: number) {
    this.ingrediants.splice(index, 1);
  }

  storeList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.put(firebaseConfig.databaseUrl + userId + '/shopping-list.json?auth=' + token, this.ingrediants);
  }
}