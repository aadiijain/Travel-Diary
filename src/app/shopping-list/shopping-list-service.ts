import { EventEmitter } from '@angular/core';
import { Thing } from '../shared/thing.model'
export class ShoppingListService {
  thingsChanged = new EventEmitter<Thing[]>();
    things: Thing[] = [
        new Thing('Goggles',5),
        new Thing('Cap',10),
      ];

      getThings(){
        return this.things.slice();
      }
      addThing(thing: Thing){
        this.things.push(thing);
        this.thingsChanged.emit(this.things.slice());
      }
        addThings(things: Thing[]){
        this.things.push(...things);
        this.thingsChanged.emit(this.things.slice());
      }
}