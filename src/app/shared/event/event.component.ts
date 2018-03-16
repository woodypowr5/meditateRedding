import { Event } from './../event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private event: Event;
  @Input() eventData;

  constructor() { }

  ngOnInit() {
    this.event = this.eventData;
  }

}
