import { ColorService } from './../../services/color.service';
import { Event } from './../event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  private event: Event;
  private colors: any;
  @Input() eventData;

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.event = this.eventData;
    this.colors = this.colorService.getColorForGroup(this.event.group);
    this.getStyleString();
  }

  getStyleString() {
    console.log();
  }

}
