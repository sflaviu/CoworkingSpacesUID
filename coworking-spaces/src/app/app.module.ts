import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';

import {ReactiveFormsModule} from '@angular/forms';
import { LocationComponent } from './location/location.component';
import { SpaceRentalComponent } from './space-rental/space-rental.component';
import {Globals} from './model/globals';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'location', component: LocationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StickyHeaderComponent,
    HeaderItemComponent,
    HomeComponent,
    MembershipComponent,
    LocationComponent,
    SpaceRentalComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})

export class AppModule { }
