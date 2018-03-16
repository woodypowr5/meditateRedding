import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  private colorScheme = [
    'Red',
    'Green',
    'Blue'
  ];
  private groupColors: any =

  {
    'Redding Zen Priory': this.colorScheme[0],
    'Center for Spiritual Living': this.colorScheme[1],
    'River Oak Sangha': this.colorScheme[2],
  };

  getColorForGroup(groupName) {
    return this.groupColors[groupName];
  }

  constructor() { }
}
