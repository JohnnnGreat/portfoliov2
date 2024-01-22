import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements OnInit {
  showPreloader = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreloader = false;
    }, 5000); // 5000 milliseconds = 5 seconds
  }
}
