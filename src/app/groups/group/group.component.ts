import { Group } from './group.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group: Group;
  @Input() groupInput;

  constructor() { }

  ngOnInit() {
    this.group = this.groupInput;
  }

}
