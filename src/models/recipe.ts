import { Ingrediant } from "./ingrediant";

export class Recipe {
  constructor(public title: string,
              public description: string,
              public difficulty: string,
              public ingrediants: Ingrediant[]) {}
}
