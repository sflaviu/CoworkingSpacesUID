import { Injectable } from '@angular/core';
import {Event} from '../../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Event[] = [
    { id: 1, title: 'Event n 1', description: 'E1 desc', nbSeats: 10, specialFeatures: 'free drinks', 
     startTime : '5 PM', endTime: '7 PM', date: 'January 14th', lat: 51.678418,lng: 7.809007},
    { id: 2, title: 'Event n 2', description: 'E1 desc', nbSeats: 10, lat: 51.678418,lng: 7.809007,
    specialFeatures: 'free drinks', startTime : '5 PM', endTime: '7 PM', date: 'January 14th'},
    { id: 3, title: 'Event n 3', description: 'E1 desc', nbSeats: 10, lat: 51.678418,lng: 7.809007,
    specialFeatures: 'free drinks', startTime : '5 PM', endTime: '7 PM', date: 'January 15th'},
    { id: 4, title: 'Event n 4', description: 'E1 desc', nbSeats: 10, lat: 51.678418,lng: 7.809007,
    specialFeatures: 'free drinks', startTime : '5 PM', endTime: '7 PM', date: 'January 16th'}, 
    { id: 4, title: 'Event n 4', description: 'E1 desc', nbSeats: 10, lat: 51.678418,lng: 7.809007,
    specialFeatures: 'free drinks', startTime : '5 PM', endTime: '7 PM', date: 'January 16th'}, 
    { id: 4, title: 'Event n 4', description: 'E1 desc', nbSeats: 10, lat: 51.678418,lng: 7.809007,
    specialFeatures: 'free drinks', startTime : '5 PM', endTime: '7 PM', date: 'January 16th'}, 
    { id: 4, title: 'Event n 4', description: 'E1 desc', nbSeats: 10, lat: 51.678418,lng: 7.809007,
    specialFeatures: 'free drinks', startTime : '5 PM', endTime: '7 PM', date: 'January 16th'}, 
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
