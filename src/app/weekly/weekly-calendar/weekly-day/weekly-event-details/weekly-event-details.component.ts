import { Event } from './../../../../shared/event.model';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-weekly-event-details',
  templateUrl: './weekly-event-details.component.html',
  styleUrls: ['./weekly-event-details.component.css']
})
export class WeeklyEventDetailsComponent implements OnInit {
  lat: number;
  lng: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.lat = this.data.groupData[0].lat;
    this.lng = this.data.groupData[0].lng;
  }


}
