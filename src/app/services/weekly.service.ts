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
      time: '600AM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: 'The weekly meeting of the River Oak Sangha',
      descriptionBody: 'Test'
    });


  // Wednesday
    this.events.push({
      id: 0,
      name: 'Morning Meditation Practice',
      dayRepeating: 'Wednesday',
      date: '',
      time: '600AM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: 'The weekly meeting of the River Oak Sangha',
      descriptionBody: 'Test'
    });
    this.events.push({
        id: 1,
        name: 'River Oak Sangha Weekly Gathering',
        dayRepeating: 'Monday',
        date: '',
        time: '630PM - 8PM',
        location: 'Blah',
        tradition: 'Mindfullness',
        description: 'The weekly meeting of the River Oak Sangha',
        descriptionBody: 'Test'
    });
    this.events.push({
      id: 0,
      name: 'Morning Meditation Practice',
      dayRepeating: 'Wednesday',
      date: '',
      time: '600PM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: 'The weekly meeting of the River Oak Sangha',
      descriptionBody: 'Test'
    });

  // Thursday
    this.events.push({
      id: 0,
      name: 'Morning Meditation Practice',
      dayRepeating: 'Thursday',
      date: '',
      time: '600AM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: 'The weekly meeting of the River Oak Sangha',
      descriptionBody: 'Test'
    });

  // Friday
  this.events.push({
    id: 0,
    name: 'Morning Meditation Practice',
    dayRepeating: 'Friday',
    date: '',
    time: '600AM',
    location: 'Blah',
    tradition: 'Mindfullness',
    description: 'The weekly meeting of the River Oak Sangha',
    descriptionBody: 'Test'
  });


  // Saturday

  // Sunday
  }
  getEvents(){
    return this.events;
  }
}
