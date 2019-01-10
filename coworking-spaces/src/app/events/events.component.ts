import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { EventService } from '../services/event/event.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
 

  constructor(private router: Router, private eventsService: EventService) { 
    this.events = eventsService.getEvents();
  }

  ngOnInit() {
  }

  openEvent(id){
    this.router.navigate(['event', id]);
  }

}
