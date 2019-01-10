import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LocationComponent } from './location/location.component';
import { SpaceRentalComponent } from './space-rental/space-rental.component';
import {Globals} from './model/globals';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { AgmCoreModule } from '@agm/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'location', component: LocationComponent},
  {path: 'events', component: EventsComponent},
  {path: 'event/:id', component: EventComponent}
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
    EventsComponent,
    EventComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBX0ZMqld-FvxRojQ-UwLcPbC4BFXLeSRM'
    }),
    ToastrModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})

export class AppModule { }
