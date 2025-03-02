import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-e-database',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edatabase.component.html',
  styleUrl: './edatabase.component.css',
})
export class EDatabaseComponent {
  databases = [
    { title: 'IEEE(ASPP) Journals', iconSrc: './assets/Database/chip.png' },
    { title: 'J-Gate Complete Database(Journals)', iconSrc: './assets/Database/journal.png' },
    { title: 'Elsevire Science Direct', iconSrc: './assets/Database/atom.png' },
    { title: 'ASCE', iconSrc: './assets/Database/engineer.png' },
    { title: 'ASCE(New)', iconSrc: './assets/Database/engineer.png' },
    { title: 'Manuputra Online', iconSrc: './assets/Database/justice-scale.png' },
    { title: 'AIR Online', iconSrc: './assets/Database/email.png' },
    { title: 'Prowess IQ II', iconSrc: './assets/Database/pie-chart.png' },
    { title: 'Prowess IQ', iconSrc: './assets/Database/PQ1.png' },
    { title: 'E-Shodh Sindhu', iconSrc: './assets/Database/globe.png' },
    { title: 'E-Shodh Sindhu II', iconSrc: './assets/Database/briefcase.png' },
    { title: 'Previous Year Papers', iconSrc: './assets/Database/paper.png' },
  ];
}
