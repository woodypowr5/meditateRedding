import { Retreat } from './../retreat.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retreat',
  templateUrl: './retreat.component.html',
  styleUrls: ['./retreat.component.css']
})
export class RetreatComponent implements OnInit {
  retreat: Retreat;
  month: string;
  @Input() monthInput;
  @Input() retreatInput;

  constructor() { }

  ngOnInit() {
    this.retreat = this.retreatInput;
    this.month = this.monthInput;
  }
}
