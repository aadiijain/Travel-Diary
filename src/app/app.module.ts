import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlacesComponent } from './places/places.component';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { PlaceItemComponent } from './places/place-list/place-item/place-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlacesComponent,
    PlaceListComponent,
    PlaceDetailComponent,
    PlaceItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
