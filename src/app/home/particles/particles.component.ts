import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.scss',
})
export class ParticlesComponent implements OnInit {
  ngOnInit(): void {
    this.initParticles();
  }

  private initParticles(): void {
    particlesJS('particles-js', {
      // Configure particles options here
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        // Add more particle options as needed
      },
    });
  }
}
