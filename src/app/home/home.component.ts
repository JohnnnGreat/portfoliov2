import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { Title, Meta } from '@angular/platform-browser';
import { ServicesComponent } from './services/services.component';
import { TechstackComponent } from './techstack/techstack.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ClientsComponent } from './clients/clients.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    TechstackComponent,
    AboutComponent,
    WorkComponent,
    ClientsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private title: Title) {
    this.title.setTitle('Home Page');
  }
}
