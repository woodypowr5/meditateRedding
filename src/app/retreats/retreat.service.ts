import { Retreat } from './retreat.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RetreatService {

  retreats: Retreat[] = [];

  constructor() {
    this.populateRetreats();
  }

  populateRetreats() {
    this.retreats.push({
      id: 0,
      name: 'Jukai:  The Ten Precepts',
      date: 'March 25 – April 1',
      month: 'March',
      length: '8',
      location: 'Shasta Abbey Monestary',
      group: 'Shasta Abbey Monestary',
      tradition: 'Soto Zen',
      description: 'The Ten Precepts are at the heart of the tradition of Serene Reflection Meditation. The Ten Precepts Retreat is the doorway through which those who wish to become lay Buddhists make their commitment to the Precepts. It is also a time for those who have previously made this commitment to reaffirm it. Through the five traditional ceremonies, as well as in Dharma talks and daily practice, this retreat explores the fundamental aspects of receiving and living the Precepts.',
      contactName: "",
      contactPhone: "",
      url: "http://www.google.com"
    });
    
    this.retreats.push({
      id: 0,
      name: 'Introductory Retreat',
      date: 'April 13 – 15',
      month: 'April',
      length: '3',
      location: 'Shasta Abbey Monestary',
      group: 'Shasta Abbey Monestary',
      tradition: 'Soto Zen',
      description: 'An Introductory Retreat introduces guests new to Shasta Abbey to the Serene Reflection (Soto Zen) practice in a monastic setting. It provides down-to-earth help for taking this practice back into daily life outside the monastery gates. Introductory Retreats offer meditation instruction, periods of seated meditation, Dharma talks and informal discussions about meditation, mindfulness and the basic teachings of Serene Reflection. The retreat concludes with an informal tea for retreat guests, monks and our local congregation.',
      contactName: "",
      contactPhone: "",
      url: "http://www.google.com"
  });
  this.retreats.push({
    id: 0,
    name: 'Introductory Retreat',
    date: 'June 1 – 3',
    month: 'June',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: 'An Introductory Retreat introduces guests new to Shasta Abbey to the Serene Reflection (Soto Zen) practice in a monastic setting. It provides down-to-earth help for taking this practice back into daily life outside the monastery gates. Introductory Retreats offer meditation instruction, periods of seated meditation, Dharma talks and informal discussions about meditation, mindfulness and the basic teachings of Serene Reflection. The retreat concludes with an informal tea for retreat guests, monks and our local congregation.',
    contactName: "",
    contactPhone: "",
    url: "http://www.google.com"
  });
  this.retreats.push({
    id: 0,
    name: 'The Buddha\'s teaching from the Pali Canon',
    date: 'June 17 – 24',
    month: 'June',
    length: '8',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: 'Rev. Master Daishin will offer Dharma talks on some of the Buddha’s Teachings from the Pali Canon. The Pali Canon is one of the earliest written records of the Buddha’s discourses to survive intact to the present day. Although there is usually a context in which His words were spoken, there is also a timeless wisdom and compassion.',
    contactName: "",
    contactPhone: "",
    url: "http://www.google.com"
  });
  this.retreats.push({
    id: 0,
    name: 'Transforming Our Daily Life',
    date: 'July 26 – 29',
    month: 'July',
    length: '4',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: ' Our work relationships and the ordinary activities of daily life come alive with clarity, joy and purpose when we see them as the very vehicle for realizing the Buddha’s Truth for ourselves and all those around us. Because of our deep interconnection with all life, when we put the timeless teachings of the Buddha into practice, we see their profound ripple effect for the benefit of all beings. During this three-day retreat we will focus our Dharma talks and discussions on learning to use all of the activities of our daily lives as our teachers.',
    contactName: "",
    contactPhone: "",
    url: "http://www.google.com"
  });
  this.retreats.push({
    id: 0,
    name: 'Introductory Retreat',
    date: 'July 15 – 18',
    month: 'July',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: 'An Introductory Retreat introduces guests new to Shasta Abbey to the Serene Reflection (Soto Zen) practice in a monastic setting. It provides down-to-earth help for taking this practice back into daily life outside the monastery gates. Introductory Retreats offer meditation instruction, periods of seated meditation, Dharma talks and informal discussions about meditation, mindfulness and the basic teachings of Serene Reflection. The retreat concludes with an informal tea for retreat guests, monks and our local congregation.',
    contactName: "",
    contactPhone: "",
    url: "http://www.google.com"
  });
  this.retreats.push({
    id: 0,
    name: 'Introductory Retreat',
    date: 'Aug 10 – 12',
    month: 'Aug',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: 'An Introductory Retreat introduces guests new to Shasta Abbey to the Serene Reflection (Soto Zen) practice in a monastic setting. It provides down-to-earth help for taking this practice back into daily life outside the monastery gates. Introductory Retreats offer meditation instruction, periods of seated meditation, Dharma talks and informal discussions about meditation, mindfulness and the basic teachings of Serene Reflection. The retreat concludes with an informal tea for retreat guests, monks and our local congregation.',
    contactName: "",
    contactPhone: "",
    url: "http://www.google.com"
  });
  this.retreats.push({
    id: 0,
    name: 'Introductory Retreat',
    date: 'September 21 – 23',
    month: 'September',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: 'An Introductory Retreat introduces guests new to Shasta Abbey to the Serene Reflection (Soto Zen) practice in a monastic setting. It provides down-to-earth help for taking this practice back into daily life outside the monastery gates. Introductory Retreats offer meditation instruction, periods of seated meditation, Dharma talks and informal discussions about meditation, mindfulness and the basic teachings of Serene Reflection. The retreat concludes with an informal tea for retreat guests, monks and our local congregation.',
    contactName: "",
    contactPhone: "",
    url: "http://www.google.com"
  });
  this.retreats.push({
    id: 0,
    name: 'Introductory Retreat',
    date: 'October 16-18',
    month: 'October',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: 'An Introductory Retreat introduces guests new to Shasta Abbey to the Serene Reflection (Soto Zen) practice in a monastic setting. It provides down-to-earth help for taking this practice back into daily life outside the monastery gates. Introductory Retreats offer meditation instruction, periods of seated meditation, Dharma talks and informal discussions about meditation, mindfulness and the basic teachings of Serene Reflection. The retreat concludes with an informal tea for retreat guests, monks and our local congregation.',
    contactName: "",
    contactPhone: "",
    url: "http://www.google.com"
  });
  this.retreats.push({
    id: 0,
    name: 'Introductory Retreat',
    date: 'November 9 – 11',
    month: 'November',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: 'An Introductory Retreat introduces guests new to Shasta Abbey to the Serene Reflection (Soto Zen) practice in a monastic setting. It provides down-to-earth help for taking this practice back into daily life outside the monastery gates. Introductory Retreats offer meditation instruction, periods of seated meditation, Dharma talks and informal discussions about meditation, mindfulness and the basic teachings of Serene Reflection. The retreat concludes with an informal tea for retreat guests, monks and our local congregation.',
    contactName: "",
    contactPhone: "",
    url: "http://www.google.com"
  });

  }
}
