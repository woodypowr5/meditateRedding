import { Group } from './../groups/group/group.model';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupsService {

  groups: Group[] = [];

  constructor() {
    this.populateGroups();
  }

  populateGroups() {
    this.groups.push({
      name: 'Center for Spiritual Living',
      address: 'dunno',
      contactName: '',
      contactNumber: '',
      photoPath: ''
    });
    this.groups.push({
      name: 'Redding Zen Priory',
      address: 'dunno',
      contactName: '',
      contactNumber: '',
      photoPath: ''
    });
    this.groups.push({
      name: 'River Oak Sangha',
      address: 'dunno',
      contactName: '',
      contactNumber: '',
      photoPath: ''
    });
  }


}
