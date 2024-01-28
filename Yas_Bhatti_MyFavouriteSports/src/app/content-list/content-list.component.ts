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
        title: 'Tony Stark',
        description: 'Iron Man',
        creator: 'Robert Downey Jr.',
        imgURL: 'assets/images/iron-man.png',
        type: 'Human',
        tags: ['iron', 'tech', 'science'],
      },
      {
        id: 1,
        title: 'Thor Odinson',
        description: 'Thor',
        creator: 'Christopher Hemsworth',
        imgURL: 'assets/images/thor.jpeg',
        type: 'God',
        tags: ['magic', 'power'],
      },
      {
        id: 2,
        title: 'Bruce Banner',
        description: 'Hulk',
        creator: 'Mark Ruffalo',
        imgURL: 'assets/images/hulk.png',
        type: 'Radiation',
        tags: ['biology', 'laboratory'],
      },
      {
        id: 3,
        title: 'Steven Rogers',
        description: 'Captain America',
        creator: 'Chris Evans',
        imgURL: 'assets/images/captain-america.jpg',
        type: 'Human',
        tags: ['captain', 'army'],
      },
      {
        id: 4,
        title: 'Janet Dyne',
        description: 'Wasp',
        creator: 'Hayley Lovitt',
        imgURL: 'assets/images/wasp.jpg',
        type: 'Human',
        tags: ['insect', 'wasp'],
      },
      {
        id: 5,
        title: 'Wanda Maximoff',
        description: 'Scarlet Witch',
        creator: 'Elizabeth Olsen',
        imgURL: 'assets/images/scarlet-witch.jpg',
        type: 'Mutant',
        tags: ['witch', 'mind'],
      },
    ];
  }
}