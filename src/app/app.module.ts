import { NgModule } from '@angular/core';
import { MenuStateService } from './menu-state.service';
import { HomeModule } from './home/home.module';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  providers: [MenuStateService],
  imports: [HomeModule, AppModule, ParticlesModule],
})
export class AppModule {}
