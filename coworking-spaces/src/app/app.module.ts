import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LocationComponent } from './location/location.component';
import { SpaceRentalComponent } from './space-rental/space-rental.component';
import {Globals} from './model/globals';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {NgbDropdown, NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'location', component: LocationComponent},
  {path: 'spaceRental', component: SpaceRentalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StickyHeaderComponent,
    HeaderItemComponent,
    HomeComponent,
    MembershipComponent,
    LocationComponent,
    SpaceRentalComponent,
    DatepickerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})

export class AppModule { }
