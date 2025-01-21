import { EventEmitter, Injectable } from '@angular/core';
import { Place } from './place.model';
import { Thing } from  '../shared/thing.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';
@Injectable()
export class PlaceService {
    placeSelected = new EventEmitter<Place>();
    private places:Place[]=[
        new Place('Goa',
        'Magnificient Beaches',
        'https://mygate.com/wp-content/uploads/2023/08/159.jpg',
        [
            new Thing('Watch',1),
            new Thing('Ring',20)
        ]),
        new Place('Sikkim',
        'Deadly Mountains',
        'https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    [
          new Thing('Bracelet',2),
          new Thing('Chain',1)
    ])
      ];
      constructor(private slService: ShoppingListService){}
    getPlaces(){
        return this.places.slice();
    }
    addThingsToShoppingList(things: Thing[]){
      this.slService.addThings(things);
    }
}