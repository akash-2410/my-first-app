import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export class TableComponent {
  @Input() tableData: any[] = [];
  @Input() columns: string[] = [];
}
