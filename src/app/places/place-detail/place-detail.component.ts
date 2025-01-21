import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../place.model'
import { PlaceService } from '../places.service';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent {
@Input() place: Place;
constructor(private placeService: PlaceService){}
ngOnInit(){}
onAddToShoppingList(){
this.placeService.addThingsToShoppingList(this.place.things);
}
}
