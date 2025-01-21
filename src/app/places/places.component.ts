import { Component, OnInit } from '@angular/core';
import { Place } from './place.model'
import { PlaceService } from './places.service';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  providers: [PlaceService]
})
export class PlacesComponent {
selectedPlace: Place;
constructor(private placeService: PlaceService){}
ngOnInit(){
  this.placeService.placeSelected
  .subscribe((place:Place)=>{
    this.selectedPlace = place;
  });
}
}
