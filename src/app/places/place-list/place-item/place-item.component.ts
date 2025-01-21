import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../place.model'
import { PlaceService } from '../../places.service';
@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.css']
})
export class PlaceItemComponent {
@Input() place: Place;
constructor(private placeService: PlaceService){}
ngOnInit(){}
onSelected(){
  this.placeService.placeSelected.emit(this.place);
}
}
