import { CommonModule } from '@angular/common';
import { work } from './type';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  work: work[] = [
    {
      title: 'Food Green',
      path: '/food-green',
      image: '../../../assets/ImageOne.png',
      subject: ['UI Design', 'Mobile'],
      // image: require('../../../assets/imageOne.png'),
    },
    {
      title: 'FitVibeHub',
      path: '/food-green',
      image: '../../../assets/fitvibe.png',
      subject: ['UI Design', 'Web'],
    },
    {
      title: 'Veronicas Kitchen',
      path: '/veronicas-kitchen',
      image: '../../../assets/Vero.jpg',
      subject: ['UI Design', 'Web'],
    },

    {
      title: 'Midwest',
      path: '/midwest',
      image: '../../../assets/Midwest.jpg',
      subject: ['UI Design', 'Coding'],
    },

    {
      title: 'Portfolio',
      path: '/portfoliojohn',
      image: '../../../assets/PortfolioJohn.png',
      subject: ['UI Design', 'Coding'],
    },
  ];
}
