import { GroupsService } from './../../../services/groups.service';
import { Event } from './../../../shared/event.model';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { WeeklyEventDetailsComponent } from '../weekly-day/weekly-event-details/weekly-event-details.component';


@Component({
  selector: 'app-weekly-day',
  templateUrl: './weekly-day.component.html',
  styleUrls: ['./weekly-day.component.css']
})
export class WeeklyDayComponent implements OnInit {
  dailyEvents: Event[] = [];
  @Input() dayOfWeek;
  @Input() events: Event[];
  dialogRef: MatDialogRef<WeeklyEventDetailsComponent>;

  constructor(public dialog: MatDialog, private groupsService: GroupsService) {}

  ngOnInit() {
    this.dailyEvents = this.events;
  }

  openDialog(data) {
    data.groupData = this.getGroupData(data.group);
    this.dialogRef = this.dialog.open(WeeklyEventDetailsComponent, {
      data: data
    });
  }

  getGroupData(groupName) {
    return this.groupsService.getGroupData(groupName);
  }

}
