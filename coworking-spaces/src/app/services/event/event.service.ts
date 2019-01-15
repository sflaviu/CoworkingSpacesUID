import { Injectable } from '@angular/core';
import {Event} from '../../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Event[] = [
    { id: 1, title: 'Book club', description: 'Club made for book lovers', nbSeats: 10, specialFeatures: 'free drinks, library with renting possibility(one book a week)',
     startTime : '5 PM', endTime: '7 PM', date: 'January 14th', lat: 51.678418,lng: 7.809007},
    { id: 2, title: 'Movie night', description: 'Evening horror movie marathon', nbSeats: 20, lat: 51.678418,lng: 7.809007,
    specialFeatures: 'available drinks, snacks (popcorn, chocolate, chips)', startTime : '8 PM', endTime: '10 PM', date: 'February 5th'},
    { id: 3, title: 'Javascript Course', description: 'Scorpion software is organizing a totally charge free JS course. Made for you!', nbSeats: 15, lat: 51.678418,lng: 7.809007,
    specialFeatures: 'internet connection, coffee, tea, snacks, lunch break', startTime : '9 AM', endTime: '5 PM', date: 'January 10th'},
  ];

  constructor() { }

  addEvent(event: Event ) {
    event.id = this.events.length+1;
    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }

}
