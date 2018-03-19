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
      description: 'The Center for Spiritual Living is a global community comprised of more than 400 theological chapters, teaching centers, study groups, and other ministries across 30 countries. The Center provides a space for groups of various denominations to gather and participate in their respective practice.',
      address: '1905 Hartnell Ave.',
      address2: 'Redding, CA 96002',
      phone: '(530) 221-4849',
      contactName: '',
      contactNumber: '',
      imagePath: 'https://firebasestorage.googleapis.com/v0/b/meditateredding.appspot.com/o/CSL.png?alt=media&token=9a5d9156-cca1-44fd-9f5a-b0b1de2732bc',
      url: 'https://www.cslredding.org/'
    });
    this.groups.push({
      name: 'Redding Zen Priory',
      address: '1190 South Street',
      address2: 'Redding, California 96001',
      phone: '',
      email: 'reddingzen@gmail.com',
      description: 'Rev. Helen Cummings from Shasta Abbey Buddhist Monestary is in residence as Prior of the Redding Zen Buddhist Priory. The Priory offers many meditation and ceremony events throughout the week, and all activities are open to the public.',
      contactName: '',
      contactNumber: '',
      imagePath: 'https://firebasestorage.googleapis.com/v0/b/meditateredding.appspot.com/o/ReddingZenPriory.jpg?alt=media&token=b4924bb3-f33f-48b9-bb83-b70d5aed9692',
      url: 'https://www.facebook.com/Redding-Zen-Buddhist-Priory-165681297386070/'
    });
    this.groups.push({
      name: 'River Oak Sangha',
      description: 'The River Oak Sangha welcomes everyone with an interest in mindfulness practice, including first-time visitors and guests. We aspire to apply mindfulness to everyday life while balancing practice and study.  Such a path can decrease suffering, increase happiness, and ultimately lead to the natural development of compassion and wisdom. ',
      address: '3724 Summit Drive',
      phone: '',
      address2: 'Mount Shasta, CA 96067-9102',
      contactName: '',
      contactNumber: '',
      imagePath: 'https://firebasestorage.googleapis.com/v0/b/meditateredding.appspot.com/o/RiverOakSangha.png?alt=media&token=f29cfd71-d331-40f6-a95d-42d15b05a456',
      url: 'http://mindfulredding.blogspot.com/'
    });
    this.groups.push({
      name: 'Shasta Abbey Buddhist Monastery',
      description: 'The Shasta Abbey is a Buddhist monastery in the Serene Reflection Meditation (Soto Zen) Tradition, and  offers retreats, ceremonies, teaching and spiritual counseling, as well as the opportunity to train within a monastic schedule.',
      address: '3724 Summit Drive',
      address2: 'Mount Shasta, CA 96067-9102',
      phone: '',
      contactName: '',
      contactNumber: '',
      imagePath: 'https://firebasestorage.googleapis.com/v0/b/meditateredding.appspot.com/o/ShastaAbbey.jpg?alt=media&token=4ee558b5-dd02-4746-aa31-fdd285f9c2cc',
      url: 'https://shastaabbey.org/'
    });
  }


}
