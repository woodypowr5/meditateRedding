import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-weekly-event-details',
  templateUrl: './weekly-event-details.component.html',
  styleUrls: ['./weekly-event-details.component.css']
})
export class WeeklyEventDetailsComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }


}
