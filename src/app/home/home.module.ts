import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoadingService } from '../loading.service';
import { LoadingModule } from '../loading/loading.module';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [HomeComponent, LoadingComponent],
  imports: [CommonModule, LoadingModule],
  exports: [],
  providers: [LoadingService],
})
export class HomeModule {}
