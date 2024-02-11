import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent {
  searchTitle: string = '';
  searchMsg: string = '';
  isTitleFound: boolean = false;
  contents: Content[];

  constructor() {
    this.contents = [
      {
        id: 0,
        title: 'Soccer',
        description: 'The Beautiful Game',
        creator: 'FIFA',
        imgURL: 'assets/images/soccer.jpeg',
        type: 'Team Sport',
        tags: ['football', 'goal', 'pitch'],
      },
      {
        id: 1,
        title: 'Basketball',
        description: 'NBA Excitement',
        creator: 'National Basketball Association',
        // imgURL: 'assets/images/basketball.jpeg',
        type: 'Team Sport',
        tags: ['hoop', 'dunk', 'court'],
      },
      {
        id: 2,
        title: 'Tennis',
        description: 'Grand Slam Action',
        creator: 'Various',
        imgURL: 'assets/images/tennis.jpeg',
        type: '',
        tags: ['racket', 'serve', 'court'],
      },
      {
        id: 3,
        title: 'Golf',
        description: 'Masters Tournament',
        creator: 'Augusta National Golf Club',
        imgURL: 'assets/images/golf.jpeg',
        type: 'Individual Sport',
        tags: ['putt', 'tee', 'green'],
      },
      {
        id: 4,
        title: 'Swimming',
        description: 'Olympic Aquatics',
        creator: 'Various',
        imgURL: 'assets/images/swimming.jpeg',
        type: 'Individual Sport',
        tags: ['pool', 'stroke', 'record'],
      },
      {
        id: 5,
        title: 'Cycling',
        description: 'Tour de France Adventure',
        creator: 'Amaury Sport Organisation',
        imgURL: 'assets/images/cycling.jpeg',
        type: 'Individual Sport',
        tags: ['bike', 'race', 'mountains'],
      },
      {
        id: 6,
        title: 'Volleyball',
        description: 'Spiking Success',
        creator: 'FIVB',
        // imgURL: 'assets/images/volleyball.jpeg',
        type: 'Team Sport',
        tags: ['spike', 'block', 'court'],
      },
    ];
  }

  searchContentByTitle() {
    const doesTitleMatch = this.contents.some(
      (content) =>
        content.title.toLowerCase() === this.searchTitle.toLowerCase()
    );

    this.isTitleFound = doesTitleMatch;
    this.searchMsg = doesTitleMatch
      ? `Content with title '${this.searchTitle}' exists.`
      : `Content with title '${this.searchTitle}' does not exist.`;
  }
}
