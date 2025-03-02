import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent {
  events = [
    { title: 'Guest Lecture on AI', date: 'Mar 5', day: 'Tuesday', time: '10:00 AM', color: '#6475fe', lightColor: '#e0e4ff' },
    { title: 'Hackathon 2025', date: 'Mar 10', day: 'Sunday', time: '09:00 AM', color: '#ff9f00', lightColor: '#ffeccc' },
    { title: 'Cultural Fest', date: 'Mar 15', day: 'Friday', time: '06:00 PM', color: '#502f74', lightColor: '#ddd6e4' },
    { title: 'Job Fair', date: 'Mar 20', day: 'Wednesday', time: '11:00 AM', color: '#6475fe', lightColor: '#e0e4ff' }
  ];
}
