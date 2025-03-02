import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../reusable/tables/tables.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,TableComponent], 
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  historyData = [
    { title: 'Book 1', author: 'Author 1', bookCode: '12345', returnDate: '2025-03-01', overdueDays: 2, totalFare: '$5' },
    { title: 'Book 2', author: 'Author 2', bookCode: '54321', returnDate: '2025-02-28', overdueDays: 3, totalFare: '$7' },
    { title: 'Book 3', author: 'Author 3', bookCode: '67890', returnDate: '2025-03-02', overdueDays: 1, totalFare: '$3' },
    { title: 'Book 4', author: 'Author 4', bookCode: '09876', returnDate: '2025-02-27', overdueDays: 5, totalFare: '$10' },
    { title: 'Book 5', author: 'Author 5', bookCode: '11223', returnDate: '2025-03-01', overdueDays: 2, totalFare: '$5' },
    { title: 'Book 6', author: 'Author 6', bookCode: '44556', returnDate: '2025-02-25', overdueDays: 7, totalFare: '$15' },
    { title: 'Book 7', author: 'Author 7', bookCode: '77889', returnDate: '2025-02-20', overdueDays: 10, totalFare: '$20' },
  ];
}
