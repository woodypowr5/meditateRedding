import { WeeklyService } from './../../services/weekly.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css']
})
export class WeeklyCalendarComponent implements OnInit {
  private events;

  constructor(private weeklyService: WeeklyService) { }

  ngOnInit() {
    this.events = this.weeklyService.getEvents();
  }

  getDailyEvents(day) {
    return this.events.filter( event => event.dayRepeating === day );
  }

}
