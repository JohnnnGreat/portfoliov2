import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ServicesComponent } from './services/services.component';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private title = 'portfoliov2';

  public navigations = [
    { id: 1, navTag: 'Home', path: '/' },
    { id: 2, navTag: 'Projects', path: '/projects' },
    { id: 3, navTag: 'About', path: '/about' },
    { id: 4, navTag: 'Contact', path: '/contact' },
  ];
}
