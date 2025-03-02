import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements AfterViewInit {
  books = [
    { title: 'Book 1', author: 'Author 1', image: './assets/book1.jpg' },
    { title: 'Book 2', author: 'Author 2', image: './assets/book2.jpg' },
    { title: 'Book 3', author: 'Author 3', image: './assets/book3.jpeg' },
    { title: 'Book 4', author: 'Author 4', image: './assets/book4.jpeg' },
    { title: 'Book 5', author: 'Author 5', image: './assets/book5.jpg' },
    { title: 'Book 6', author: 'Author 6', image: './assets/book6.jpg' },
    { title: 'Book 7', author: 'Author 7', image: './assets/book7.jpg' },
    { title: 'Book 8', author: 'Author 8', image: './assets/book8.jpeg' },
    { title: 'Book 9', author: 'Author 9', image: './assets/book9.jpg' },
    { title: 'Book 10', author: 'Author 10', image: './assets/book10.jpeg' },
    { title: 'Book 11', author: 'Author 11', image: './assets/book11.png' }
  ];

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  bookWidth = 160;  // Each book's width
  visibleItems = 5; // 5 books visible at a time
  currentIndex = 0; // Start from the first book

  ngAfterViewInit() {
    this.updateCarouselWidth();
  }

  updateCarouselWidth() {
    if (this.carousel) {
      this.carousel.nativeElement.style.width = `${this.visibleItems * this.bookWidth}px`;
    }
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarouselPosition();
    }
  }

  scrollRight() {
    const maxIndex = this.books.length - this.visibleItems;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarouselPosition();
    }
  }

  updateCarouselPosition() {
    if (this.carousel) {
      const offset = -this.currentIndex * this.bookWidth;
      this.carousel.nativeElement.style.transform = `translateX(${offset}px)`;
    }
  }
}
