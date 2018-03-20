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
      time: '5:00PM-5:30PM',
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
        time: '6:30PM - 8:00PM',
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
      time: '5:00PM-5:30PM',
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
      time: '6:00AM-7:00AM',
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
      time: '5:00PM-5:30PM',
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
      time: '6:00AM-7:00AM',
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
      time: '5:00PM-5:30PM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: '',
      descriptionBody: 'Test',
      group: 'Redding Zen Priory'
    });
    // Saturday
    this.events.push({
      id: 0,
      name: 'Morning Meditation and Service',
      dayRepeating: 'Saturday',
      date: '',
      time: '8:00AM-10:00AM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: '',
      descriptionBody: 'Test',
      group: 'Redding Zen Priory'
    });
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
    this.events.push({
      id: 0,
      name: 'Meditation and Dharma Talk',
      dayRepeating: 'Sunday',
      date: '',
      time: '10:30AM-12:00PM',
      location: 'Blah',
      tradition: 'Mindfullness',
      description: '',
      descriptionBody: 'Test',
      group: 'Redding Zen Priory'
    });
  }
  getEvents(){
    return this.events;
  }
}
