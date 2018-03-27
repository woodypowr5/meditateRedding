import { WeeklyService } from './../../services/weekly.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css']
})
export class WeeklyCalendarComponent implements OnInit {
  private events;
  private days;

  constructor(private weeklyService: WeeklyService) { }

  ngOnInit() {
    this.events = this.weeklyService.getEvents();
    this.days = this.weeklyService.getDays();
  }

  getDailyEvents(day) {
    return this.events.filter( event => event.dayRepeating === day );
  }

}
