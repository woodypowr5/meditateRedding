import { Event } from './../../../shared/event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekly-day',
  templateUrl: './weekly-day.component.html',
  styleUrls: ['./weekly-day.component.css']
})
export class WeeklyDayComponent implements OnInit {
  dailyEvents: Event[] = [];
  @Input() dayOfWeek;
  @Input() events: Event[];

  constructor() {}

  ngOnInit() {
    this.dailyEvents = this.events;
  }

}
