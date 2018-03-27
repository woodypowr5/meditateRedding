import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-weekly-event-details',
  templateUrl: './weekly-event-details.component.html',
  styleUrls: ['./weekly-event-details.component.css']
})
export class WeeklyEventDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
