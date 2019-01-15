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
import { AgmCoreModule} from '@agm/core';
import { ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {NgbDropdown, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './blog/blog.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AdminReviewMenuComponent } from './admin-review-menu/admin-review-menu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatDialogModule} from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule, MatIconModule} from '@angular/material';
import { ValidateHubOwnerComponent } from './validate-hub-owner/validate-hub-owner.component';
import { ValidateReportedCommentComponent } from './validate-reported-comment/validate-reported-comment.component';
import { JoinAsAHubOwnerComponent } from './join-as-a-hub-owner/join-as-a-hub-owner.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ValidateHubUserComponent } from './validate-hub-user/validate-hub-user.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReviewComponent } from './review/review.component';
import { HubFinderComponent } from './hub-finder/hub-finder.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'location', component: LocationComponent},
  {path: 'events', component: EventsComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'spaceRental', component: SpaceRentalComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'createPost', component: AddPostComponent},
  {path: 'validations', component: AdminReviewMenuComponent},
  {path: 'createEvent', component: CreateEventComponent },
  {path: 'joinHubOwner', component: JoinAsAHubOwnerComponent },
  {path: 'validations/validateHubOwnerRequest', component: ValidateHubOwnerComponent },
  {path: 'validations/validateHubUserRequest', component: ValidateHubUserComponent },
  {path: 'validations/validateReportedCommentRequest', component: ValidateReportedCommentComponent },
  {path: 'gamification', component: GamificationComponent},
  {path: 'submitted-comments', component: SubmittedCommentsComponent},
  {path: 'view-post', component: ViewPostComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'explore', component: HubFinderComponent}
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
    EventComponent,
    DatepickerComponent,
    BlogComponent,
    AddPostComponent,
    AdminReviewMenuComponent,
    ValidateHubOwnerComponent,
    ValidateReportedCommentComponent,
    JoinAsAHubOwnerComponent,
    CreateEventComponent,
    ValidateHubUserComponent,
    ViewPostComponent,
    LoginComponent,
    LogoutComponent,
    ViewPostComponent,
    ReviewComponent,
    HubFinderComponent

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
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [Globals, LoginComponent, LogoutComponent],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, LogoutComponent]
})

export class AppModule { }
