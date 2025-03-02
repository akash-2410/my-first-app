import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.css',
  standalone:true,
  imports:[MatIcon]
})
export class StatusCardComponent {
  @Input() title!: string;
  @Input() count!: number;
  @Input() iconSrc!: string;
  @Input() showArrow: boolean = true;  // Default is true
}
