import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Event } from '../model/event';
import { ActivatedRoute } from "@angular/router";
import { EventService } from '../services/event/event.service';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})



export class EventComponent implements OnInit {

  event: Event;

  eventArray: Event[];

  email :string;
  isInvalid : boolean;

  lat: number;
  lng: number;


  constructor(private toastr: ToastrService, private route: ActivatedRoute,
    private eventsService: EventService) {
    this.route.params.subscribe(params =>   {
      this.eventArray = eventsService.getEvents();
      this.getEvent(params.id);
    });

  }

  getEvent(id: number) {
    var event:Event = this.eventArray.find(x=> x.id == id);
    console.log(event);
    this.event = event;
  }

  ngOnInit() {
    this.email='';
    this.isInvalid = false;
  }

  onClick() {
    if(this.email !="") {
      console.log("em "+ this.email);
      var pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/;
      if(this.email.match(pattern)) {
        if(this.event.nbSeats>0)
        this.toastr.success("Please check your email for seat confirmation ");
        this.isInvalid = true;
      }
      else {
        this.toastr.error("This doesn't appear to be a valid email address");
        this.isInvalid = true;
      }

    }
    else {
      this.toastr.error('The email field cannot be empty');
      this.isInvalid = true;
    }

  }

}
