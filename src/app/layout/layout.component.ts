import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { StatusCardComponent } from "../status-card/status-card.component";
import { UpcomingEventsComponent } from "../upcoming-events/upcoming-events.component";
import { NewArrivalsComponent } from "../new-arrivals/new-arrivals.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, StatusCardComponent, UpcomingEventsComponent, NewArrivalsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
