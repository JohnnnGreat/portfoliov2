import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private title: Title) {
    this.title.setTitle('Home Page');
  }
}
