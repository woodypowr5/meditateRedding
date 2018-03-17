import { Group } from './../groups/group/group.model';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupsService {

  groups: Group[] = [];

  constructor() {
    this.populateGroups();
  }

  populateGroups() {
    // this.groups.push({
    //     id: 0
    //     name: string;
    //     startDate: string;
    //     startTime: string;
    //     length: string;
    //     location: string;
    //     group?: string;
    //     tradition?: string;
    //     description?: string;
    //     contactName?: string;
    //     contactPhone?: string;
    // });

  }


}
