import { CommonModule } from '@angular/common';
import { work } from './type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  work: work[] = [
    {
      title: 'Food Green',
      path: '/food-green',
      image: '../../../assets/ImageOne.png',
      // image: require('../../../assets/imageOne.png'),
    },
    {
      title: 'Food Blue',
      path: '/food-green',
      image: '../../../assets/fitvibe.jpg',
    },
  ];
}
