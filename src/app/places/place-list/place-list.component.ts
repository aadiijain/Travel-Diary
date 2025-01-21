import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlaceService } from '../places.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit{

  places: Place[]; 

  constructor(private placeService: PlaceService){ }
  ngOnInit() {  
    this.places = this.placeService.getPlaces();
  }


}
