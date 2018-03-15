import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekly-day',
  templateUrl: './weekly-day.component.html',
  styleUrls: ['./weekly-day.component.css']
})
export class WeeklyDayComponent implements OnInit {
  @Input() dayOfWeek;

  constructor() {}

  ngOnInit() {
  }

}
