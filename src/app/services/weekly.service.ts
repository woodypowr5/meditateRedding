import { Event } from './../shared/event.model';
import { Injectable } from '@angular/core';

@Injectable()
export class WeeklyService {
  events: Event[] = [];

  constructor() {
    this.populateEvents();
  }

  populateEvents() {

  // Monday

  // Tuesday
    this.events.push({
      id: 0,
      name: 'Morning Meditation Practice',
      dayRepeating: 'Tuesday',
      date: '',
      time: '6:00AM-7:00AM',
      location: 'Blah',
      tradition: 'Zen',
      description: '',
      descriptionBody: 'Test',
      group: 'Redding Zen Priory'
    });
    this.events.push({
      id: 0,
      name: 'Evening Meditation Practice',
      dayRepeating: 'Tuesday',
      date: '',
      time: '500PM-5:30PM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: '',
      descriptionBody: 'Test',
      group: 'Redding Zen Priory'
    });


  // Wednesday
    this.events.push({
      id: 0,
      name: 'Morning Meditation Practice',
      dayRepeating: 'Wednesday',
      date: '',
      time: '6:00AM-7:00AM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: '',
      descriptionBody: 'Test',
      group: 'Redding Zen Priory'
    });
    this.events.push({
        id: 1,
        name: 'Weekly Gathering',
        dayRepeating: 'Wednesday',
        date: '',
        time: '630PM - 8PM',
        location: 'Blah',
        tradition: 'Mindfullness',
        description: 'The weekly meeting of the River Oak Sangha',
        descriptionBody: 'Test',
        group: 'River Oak Sangha'
    });
    this.events.push({
      id: 0,
      name: 'Evening Meditation Practice',
      dayRepeating: 'Wednesday',
      date: '',
      time: '500PM-5:30PM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: '',
      descriptionBody: 'Test',
      group: 'Redding Zen Priory'
    });

  // Thursday
    this.events.push({
      id: 0,
      name: 'Morning Meditation Practice',
      dayRepeating: 'Thursday',
      date: '',
      time: '600AM-7:00AM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: '',
      descriptionBody: 'Test',
      group: 'Redding Zen Priory'
    });
    this.events.push({
      id: 0,
      name: 'Evening Meditation Practice',
      dayRepeating: 'Thursday',
      date: '',
      time: '500PM-5:30PM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: '',
      descriptionBody: 'Test',
      group: 'Redding Zen Priory'
    });
    this.events.push({
      id: 0,
      name: 'Evening Meditation Practice',
      dayRepeating: 'Thursday',
      date: '',
      time: '6:30PM-8:00PM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: '',
      descriptionBody: 'Test',
      group: 'Center for Spiritual Living'
    });

  // Friday
  this.events.push({
    id: 0,
    name: 'Morning Meditation Practice',
    dayRepeating: 'Friday',
    date: '',
    time: '600AM-7:00AM',
    location: 'Blah',
    tradition: 'Mindfullness',
    description: '',
    descriptionBody: 'Test',
    group: 'Redding Zen Priory'
  });
  this.events.push({
    id: 0,
    name: 'Evening Meditation Practice',
    dayRepeating: 'Friday',
    date: '',
    time: '500PM-5:30PM',
    location: 'Blah',
    tradition: 'Mindfullness',
    description: '',
    descriptionBody: 'Test',
    group: 'Redding Zen Priory'
  });
  // Saturday

  // Sunday
  this.events.push({
    id: 0,
    name: 'Meditation',
    dayRepeating: 'Sunday',
    date: '',
    time: '8:30AM-8:45AM',
    location: 'Blah',
    tradition: 'Non Denominational',
    description: '',
    descriptionBody: 'Test',
    group: 'Center for Spiritual Living'
  });
  }
  getEvents(){
    return this.events;
  }
}
