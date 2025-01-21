import { Component, OnInit } from '@angular/core';
import { Thing } from '../shared/thing.model';
import { ShoppingListService } from './shopping-list-service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
things: Thing[] ;
constructor(private slService: ShoppingListService){}
ngOnInit() {
  this.things = this.slService.getThings();
  this.slService.thingsChanged
  .subscribe(
    (things: Thing[])=>{
       this.things = things;
      });
}
}

