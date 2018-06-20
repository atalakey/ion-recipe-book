import { Ingrediant } from "../models/ingrediant";

export class ShoppingListService {
  private ingrediants: Ingrediant[] = [];

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
}