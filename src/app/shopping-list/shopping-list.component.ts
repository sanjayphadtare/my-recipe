import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private idChnageSub: Subscription

  constructor(private shoppinglistService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients  = this.shoppinglistService.getIngredients();
    this.idChnageSub = this.shoppinglistService.ingredientsChanged
      .subscribe(
        (ingredients : Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }
  onEditItem(index: number){
    this.shoppinglistService.startedEditing.next(index);
    
  }

ngOnDestroy(): void{
  this.idChnageSub.unsubscribe();
}
}
