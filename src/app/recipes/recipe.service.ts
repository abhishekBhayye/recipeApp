import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4vULBjG7I40hDEb_a3QiieGb3-47hbxHtvw&usqp=CAU'),
    // tslint:disable-next-line: max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4vULBjG7I40hDEb_a3QiieGb3-47hbxHtvw&usqp=CAU')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
