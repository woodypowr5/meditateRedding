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
      name: 'The Three Treasures: A True Refuge',
      date: 'March 2 – 4',
      month: 'March',
      length: '3',
      location: 'Shasta Abbey Monestary',
      group: 'Shasta Abbey Monestary',
      tradition: 'Soto Zen',
      description: "All traditions of Buddhism honor and respect the Three Treasures of Buddha, Dharma and Sangha. We come to spiritual practice with a sense that it no longer works to find satisfaction looking outside ourselves. We are called to look within for a deeper refuge – one that is true and brings peace of heart and mind. During this retreat we will explore in depth how, as Buddhists, we go for refuge to the Three Treasures and why these are our first Precepts. “…take refuge quickly in the Buddha, Dharma and Sangha for therein is to be found utter enlightenment as well as freedom from suffering.  The Buddha Himself gave certification to the great merit of the Three Treasures because of their extreme value and unbelievable profundity.  Great Master Dogen in the “Shushogi",
      contactName: "",
      contactPhone: "",
      url: "https://shastaabbey.org/2018-retreats/"
    });
    this.retreats.push({
      id: 0,
      name: 'Silent Meditation Retreat',
      date: 'March 14 – 16',
      month: 'March',
      length: '3',
      location: 'Shasta Abbey Monestary',
      group: 'Shasta Abbey Monestary',
      tradition: 'Soto Zen',
      description: "This three-day Silent Meditation Retreat focuses is very much on meditation: there are six or seven periods of meditation each day. Meals are eaten in silence. There are no Dharma talks or spiritual counseling. Monks are asked to put aside monastic office responsibilities as much as possible to go deeply into the heart of meditation. Lay participants likewise are invited to deepen their meditation in this quiet and reflective time.  Committed practitioners who have spent time at the Abbey may consult the Guestmaster about attending this Retreat.",    
      contactName: "",
      contactPhone: "",
      url: "https://shastaabbey.org/2018-retreats/"
    });
    this.retreats.push({
      id: 0,
      name: 'Jukai:  the Ten Precepts Retreat',
      date: 'March 2 – 4',
      month: 'March',
      length: '8',
      location: 'Shasta Abbey Monestary',
      group: 'Shasta Abbey Monestary',
      tradition: 'Soto Zen',
      description: 'The Ten Precepts are at the heart of the tradition of Serene Reflection Meditation. The Ten Precepts Retreat is the doorway through which those who wish to become lay Buddhists make their commitment to the Precepts. It is also a time for those who have previously made this commitment to reaffirm it. Through the five traditional ceremonies, as well as in Dharma talks and daily practice, this retreat explores the fundamental aspects of receiving and living the Precepts.',
      contactName: "",
      contactPhone: "",
      url: "https://shastaabbey.org/2018-retreats/"
    });
    // APRIL
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
      url: "https://shastaabbey.org/2018-retreats/"
  });
  this.retreats.push({
    id: 0,
    name: 'Introductory Retreat',
    date: 'May 18 - 20',
    month: 'May',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: "“On this Glorious Wesak Day…” we commemorate with gratitude the birth, life and teaching of Shakyamuni Buddha. In the Buddhist world, Wesak marks the beginning of the New Year and is the most significant and joyous event of the Buddhist calendar. During this retreat we will reflect on examples from the Buddha’s life of training and the timeless teaching He passed on to His disciples. Dharma talks and discussions will offer opportunities to explore how we can apply His Dharma more deeply to our own daily lives. This retreat also includes the usual daily meditation and services, as well as the special ceremonies celebrated during Wesak. We end the retreat with the traditional ringing of the Temple’s great bell and a picnic for all.", 
    contactName: "",
    contactPhone: "",
    url: "https://shastaabbey.org/2018-retreats/"
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
    url: "https://shastaabbey.org/2018-retreats/"
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
    url: "https://shastaabbey.org/2018-retreats/"
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
    url: "https://shastaabbey.org/2018-retreats/"
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
    url: "https://shastaabbey.org/2018-retreats/"
  });
  this.retreats.push({
    id: 0,
    name: 'Summer Intensive Program',
    date: 'July 13 – August 13',
    month: 'July',
    length: '30',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: "Join our community of 25 male and female monks this summer in a four-week intensive training period. Summer intensives begin with a three-day introductory retreat, then phase into daily meditation and ceremonies, twice weekly Dharma talks and focused Dharma discussions. In addition trainees participate daily in temple working meditation in such ways as cutting and stacking wood, preparing food, gardening, and temple maintenance. As well as the usual daily activities, trainees have the opportunity to meet regularly with a senior monk to reflect on their experience and ask questions about their meditation and training. There is no set fee to attend this session. Anyone wishing to attend an earlier Summer Intensive this year may apply to attend this program beginning June 2nd. Please fill out a retreat application if you are interested in attending a summer intensive.",
    contactName: "",
    contactPhone: "",
    url: "https://shastaabbey.org/2018-retreats/"
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
    url: "https://shastaabbey.org/2018-retreats/"
  });
  this.retreats.push({
    id: 0,
    name: 'Great Master Dogen, Scholar, Mystic, Author, Teacher, Poet',
    date: 'Aug 19 – 26',
    month: 'Aug',
    length: '8',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: "The Way to Buddhahood is easy. They who do not perpetrate evil, they who do not try to grasp at life and death but work for the good of all living things with utter compassion, giving respect to those older, and loving understanding to those younger, than themselves, they who do not reject, search for, think on or worry about anything have the name of Buddha: you must look for nothing more.  Great Master Dogen  This retreat, led by Rev. Masters Meiko and Scholastica, will offer some reflections on Dogen’s words of wisdom that inspire us in our formal meditation and practice in our daily life. In addition to teachings from the Shobogenzo, we will also explore some of Dogen’s lesser known writings. Open to those with some experience of Soto Zen meditation and practice, this week-long retreat will include Dharma talks and discussions and the opportunity for private spiritual guidance.",
    contactName: "",
    contactPhone: "",
    url: "https://shastaabbey.org/2018-retreats/"
  });
  this.retreats.push({
    id: 0,
    name: 'Silent Meditation Retreat',
    date: 'September 4 – 6',
    month: 'September',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: "This three-day Silent Meditation Retreat focuses is very much on meditation: there are six or seven periods of meditation each day. Meals are eaten in silence. There are no Dharma talks or spiritual counseling. Monks are asked to put aside monastic office responsibilities as much as possible to go deeply into the heart of meditation. Lay participants likewise are invited to deepen their meditation in this quiet and reflective time.  Committed practitioners who have spent time at the Abbey may consult the Guestmaster about attending this Retreat.",
    contactName: "",
    contactPhone: "",
    url: "https://shastaabbey.org/2018-retreats/"
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
    url: "https://shastaabbey.org/2018-retreats/"
  });
  this.retreats.push({
    id: 0,
    name: 'Awakening to True Wisdom',
    date: 'October 5-7',
    month: 'October',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: "Compassion and Wisdom are considered the two great pillars of Zen Buddhist practice. In our Serene Reflection Meditation tradition we emphasize that wisdom is completely infused with compassion and vice versa. Many of us in the West come into Zen training seeking the wisdom that will solve all of our problems, resolve our suffering; but what is this wisdom and how do we find it? Great Master Dogen answers this question in his teaching on the Four Wisdoms. In this retreat we’ll look at wisdom as practice – a kind wisdom accessible to anyone with a sincere aspiration.  “The Four Wisdoms, charity, tenderness, benevolence and sympathy, are the means we have of helping others and represent the Bodhisattva’s aspirations.”  Great Master Dogen",
    contactName: "",
    contactPhone: "",
    url: "https://shastaabbey.org/2018-retreats/"
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
    description: "This three-day Silent Meditation Retreat focuses is very much on meditation: there are six or seven periods of meditation each day. Meals are eaten in silence. There are no Dharma talks or spiritual counseling. Monks are asked to put aside monastic office responsibilities as much as possible to go deeply into the heart of meditation. Lay participants likewise are invited to deepen their meditation in this quiet and reflective time.  Committed practitioners who have spent time at the Abbey may consult the Guestmaster about attending this Retreat.",
    contactName: "",
    contactPhone: "",
    url: "https://shastaabbey.org/2018-retreats/"
  });
  this.retreats.push({
    id: 0,
    name: 'Feeding of the Hunger Ghost',
    date: 'October 25-28',
    month: 'October',
    length: '4',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: "At the heart of this retreat is transferring the merit of our Dharma practice to those who have died in tragic and distressing circumstances, as well as the conversion of “hungry ghost” states of suffering which are the result of greed and craving. In addition to Dharma talks and discussions we celebrate the Feeding of the Hungry Ghosts ceremony (Segaki), a memorial in which we offer the food of the Dharma to help bring peace to all those in need.",
    contactName: "",
    contactPhone: "",
    url: "https://shastaabbey.org/2018-retreats/"
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
    url: "https://shastaabbey.org/2018-retreats/"
  });
  this.retreats.push({
    id: 0,
    name: 'Silent Meditation Retreat',
    date: 'November 15 – 17',
    month: 'November',
    length: '3',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: "This three-day Silent Meditation Retreat focuses is very much on meditation: there are six or seven periods of meditation each day. Meals are eaten in silence. There are no Dharma talks or spiritual counseling. Monks are asked to put aside monastic office responsibilities as much as possible to go deeply into the heart of meditation. Lay participants likewise are invited to deepen their meditation in this quiet and reflective time.  Committed practitioners who have spent time at the Abbey may consult the Guestmaster about attending this Retreat.", 
    contactName: "",
    contactPhone: "",
    url: "https://shastaabbey.org/2018-retreats/"
  });
  this.retreats.push({
    id: 0,
    name: 'New Year Celebratory Retreat',
    date: 'December 28 – Jan 1',
    month: 'December',
    length: '5',
    location: 'Shasta Abbey Monestary',
    group: 'Shasta Abbey Monestary',
    tradition: 'Soto Zen',
    description: "Year-end is traditionally a time for both reflection and celebration. This 3-day retreat offers opportunities to do this together as members of the Buddha’s family. Dharma talks explore ways to deepen our resolve and our practice in the coming year. Meditation, ceremonies, and celebration offer opportunities to bid farewell to the old and welcome the new. On New Year’s Eve we hold a Vigil for Maitreya, as well as the midnight New Year’s Ceremony, followed by ringing in the New Year with the great bell. The retreat ends on January 1, and guests are welcome to stay overnight and leave on January 2.",
    contactName: "",
    contactPhone: "",
    url: "https://shastaabbey.org/2018-retreats/"
  });
  }
}
