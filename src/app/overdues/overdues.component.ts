import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../reusable/tables/tables.component";

@Component({
  selector: 'app-overdue-charges',
  standalone: true,
  imports: [CommonModule, TableComponent,],
  templateUrl: './overdues.component.html',
  styleUrl: './overdues.component.css',
})
export class OverdueComponent {
  columns = ['Image', 'Title', 'Author', 'Book Code', 'Return Date', 'Overdue Days', 'Total Fare', 'Action'];
  
  overdueBooks = [
    {
      image: './assets/book1.jpg',
      title: 'Book Title 1',
      author: 'Author 1',
      bookCode: 'B001',
      returnDate: '2024-02-25',
      overdueDays: 5,
      totalFare: '$10.00',
    },
    {
      image: './assets/book2.jpg',
      title: 'Book Title 2',
      author: 'Author 2',
      bookCode: 'B002',
      returnDate: '2024-02-20',
      overdueDays: 10,
      totalFare: '$20.00',
    },
  ];
}
