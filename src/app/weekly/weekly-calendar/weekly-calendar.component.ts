import { WeeklyEventDetailsComponent } from './weekly-day/weekly-event-details/weekly-event-details.component';
import { WeeklyService } from './../../services/weekly.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css']
})
export class WeeklyCalendarComponent implements OnInit {
  private events;
  private days;
  dialogRef: MatDialogRef<WeeklyEventDetailsComponent>;

  constructor(private weeklyService: WeeklyService, public dialog: MatDialog) { }

  ngOnInit() {
    this.events = this.weeklyService.getEvents();
    this.days = this.weeklyService.getDays();
    console.log(this.days)
  }

  getDailyEvents(day) {
    return this.events.filter( event => event.dayRepeating === day );
  }

  // openDialog() {
  //   this.dialogRef = this.dialog.open(WeeklyEventDetailsComponent, {
  //     data: {
        
  //     }
  //   });
  // }

}
