import { Component, ElementRef, ViewChild} from '@angular/core';
import { Thing } from '../../shared/thing.model'
import { ShoppingListService } from '../shopping-list-service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

constructor(private slService: ShoppingListService){}
ngOnInit(){}
onAddItem(){
  const thingName = this.nameInputRef.nativeElement.value;
  const thingAmount = this.amountInputRef.nativeElement.value;
  const newThing = new Thing(thingName, thingAmount);
  this.slService.addThing(newThing);
}
}
