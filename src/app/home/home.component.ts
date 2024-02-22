import { LoadingService } from './../loading.service';
import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { Title, Meta } from '@angular/platform-browser';
import { ServicesComponent } from './services/services.component';
import { TechstackComponent } from './techstack/techstack.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ClientsComponent } from './clients/clients.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ParticlesComponent } from './particles/particles.component';
// import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    TechstackComponent,
    AboutComponent,
    WorkComponent,
    ClientsComponent,
    LoadingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private title: Title, private loadingService: LoadingService) {
    this.title.setTitle('Home Page');
  }

  showHomePageContent: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showHomePageContent = true;
    }, 5000);
  }
}
