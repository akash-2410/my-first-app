import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionComponent {
  books = [
    { title: 'Books',  iconSrc: './assets/Collections/book-stack.png' },
    { title: 'Magazines',  iconSrc: './assets/Collections/magazine.png'},
    { title: 'Newspapers',  iconSrc: './assets/Collections/newspaper.png' },
    { title: 'CDs', iconSrc: './assets/Collections/cd.png' },
    { title: 'DVDs',  iconSrc: './assets/Collections/dvd.png' },
    { title: 'Journals',  iconSrc: './assets/Collections/journal.png' }
  ];
}
