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
      description: 'Centers for Spiritual Living is a global community comprised of more than 400 theological chapters, teaching centers, study groups, and other ministries across 30 countries.',
      address: 'dunno',
      contactName: '',
      contactNumber: '',
      imagePath: 'https://static1.squarespace.com/static/ta/5016d42984ae3ecc9e018d91/1638/assets/groovepaper.png'
    });
    this.groups.push({
      name: 'Redding Zen Priory',
      address: 'dunno',
      description: '',
      contactName: '',
      contactNumber: '',
      imagePath: '../../../assets/images/ReddingZenPriory.jpg'
    });
    this.groups.push({
      name: 'River Oak Sangha',
      description: '',
      address: 'dunno',
      contactName: '',
      contactNumber: '',
      imagePath: 'https://2.bp.blogspot.com/-_ry7NA5N_aE/TZTgcTipWUI/AAAAAAAAAA4/XgKG7GygCEc/s320/this+is+it.jpg'
    });
  }


}
