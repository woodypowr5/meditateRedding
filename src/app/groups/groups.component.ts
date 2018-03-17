import { GroupsService } from './../services/groups.service';
import { Group } from './group/group.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[] = [];

  constructor(private groupService: GroupsService) { }

  ngOnInit() {
    this.groups = this.groupService.groups;
  }

}
