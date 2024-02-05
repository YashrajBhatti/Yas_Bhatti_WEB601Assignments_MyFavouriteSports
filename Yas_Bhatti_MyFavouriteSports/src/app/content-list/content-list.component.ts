import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgStyle } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [NgFor, NgStyle, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 0,
        title: 'Football',
        description: 'Soccer',
        creator: 'FIFA',
        imgURL: '',
        type: 'Team Sport',
        tags: ['soccer', 'goal', 'pitch'],
      },
      {
        id: 1,
        title: 'Basketball',
        description: 'NBA',
        creator: 'National Basketball Association',
        imgURL: '',
        type: 'Team Sport',
        tags: ['hoop', 'dunk', 'court'],
      },
      {
        id: 2,
        title: 'Tennis',
        description: 'Grand Slam',
        creator: 'Various',
        imgURL: '',
        type: '',
        tags: ['racket', 'serve', 'court'],
      },
      {
        id: 3,
        title: 'Golf',
        description: 'Masters Tournament',
        creator: 'Augusta National Golf Club',
        imgURL: '',
        type: 'Individual Sport',
        tags: ['putt', 'tee', 'green'],
      },
      {
        id: 4,
        title: 'Cricket',
        description: 'Test Match',
        creator: 'International Cricket Council',
        imgURL: '',
        type: 'Team Sport',
        tags: ['bat', 'ball', 'wicket'],
      },
      {
        id: 5,
        title: 'Swimming',
        description: 'Olympic Sport',
        creator: 'Various',
        imgURL: '',
        type: 'Individual Sport',
        tags: ['pool', 'stroke', 'record'],
      },
      {
        id: 6,
        title: 'Cycling',
        description: 'Tour de France',
        creator: 'Amaury Sport Organisation',
        imgURL: '',
        type: 'Individual Sport',
        tags: ['bike', 'race', 'mountains'],
      },
    ];    
  }
  
}