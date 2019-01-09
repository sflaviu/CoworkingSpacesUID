import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'membership', component: MembershipComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StickyHeaderComponent,
    HeaderItemComponent,
    HomeComponent,
    MembershipComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
