import { RetreatService } from './retreat.service';
import { Retreat } from './retreat.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retreats',
  templateUrl: './retreats.component.html',
  styleUrls: ['./retreats.component.css']
})
export class RetreatsComponent implements OnInit {

  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  retreats: Retreat[] = [];

  constructor(private retreatService: RetreatService) { }

  ngOnInit() {
    this.retreats = this.retreatService.retreats;
  }
  
}
