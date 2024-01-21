import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import AOS from 'aos';
import { MenuStateService } from 'c:/Users/John/portfoliov2/src/app/menu-state.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(MenuStateService) public menuStateService: MenuStateService
  ) {}
  ngOnInit() {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing function
      // Only run the animation once
    });
  }

  toggle(value: boolean) {
    this.menuStateService.toggleMenu(value);
  }
  public navigations = [
    { id: 1, navTag: 'Home', path: '/' },
    { id: 2, navTag: 'Projects', path: '/projects' },
    { id: 3, navTag: 'About', path: '/about' },
    { id: 4, navTag: 'Contact', path: '/contact' },
  ];
}
