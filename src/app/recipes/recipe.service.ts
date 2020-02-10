import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';

// import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class RecipeService {
  // recipeSelected = new Subject<Recipe>();
recipesChanged  = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('Test recipe # 1',
  //     'In a large bowl, toss together the chicken tenders with the seasoning until well combined..',
  //     'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/8:3/w_1280,c_limit/sub-channel-food_recipes.jpg',
  //     [
  //       new Ingredient('Meat',1),
  //       new Ingredient('Chily', 1),
  //       new Ingredient('Tomato', 1)
  //     ]
  //     ),
  //   new Recipe('Test recipe # 2',
  //     'Preheat oven to 450°F. Line a baking sheet with foil and set a wire cooling rack on top. Set aside.',
  //     'https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg',
  //     [
  //       new Ingredient('Paneer', 1),
  //       new Ingredient('Tomato', 1)
  //     ]
  //     )
  // ];
  private recipes: Recipe[] =[];
  
  constructor(private shoppinglistService : ShoppingListService){

  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice()
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppinglistService.addIngredients(ingredients)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe : Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice()); 
  }
}