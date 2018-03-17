import { Retreat } from './retreat.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RetreatService {

  retreats: Retreat[] = [];

  constructor() {
    this.populateRetreats();
  }

  populateRetreats() {
    // this.groups.push({
    //     id: 0
    //     name: string;
    //     startDate: string;
    //     startTime: string;
    //     length: string;
    //     location: string;
    //     group?: string;
    //      tradition?: string;
    //     description?: string;
    //     contactName?: string;
    //     contactPhone?: string;
    // });

  }


}
