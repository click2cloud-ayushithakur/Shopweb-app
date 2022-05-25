import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected=new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Omelette',
      'A cute taste - What are you waiting for?',
      'https://c.ndtvimg.com/2020-05/rdcvrtb_fried-egg_625x300_29_May_20.jpg',
      [
        new Ingredient('Egg', 2),
        new Ingredient('Tomato', 1),
        new Ingredient('Scallions', 3)
      ]),
    new Recipe(
      'Big Bowl of ShinRamyun',
      'Long slurpy noodles - amazing!',
      'https://images.food52.com/U_ODkJRiv0kNpRSNNksPDXhto3Y=/965x643/filters:format(webp)/933c4cc4-6c8f-48ed-af23-d59bf6ecfc39--2019-0813_shin-ramyun_3x2_ty-mecham_001.jpg',
      [
        new Ingredient('Shin Ramyun', 1),
        new Ingredient('Scallions', 4),
        new Ingredient('Zucchini', 1),
        new Ingredient('Carrot', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
