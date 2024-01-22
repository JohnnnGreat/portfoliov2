import { NgModule } from '@angular/core';
import { MenuStateService } from './menu-state.service';
import { HomeModule } from './home/home.module';

@NgModule({
  providers: [MenuStateService],
  imports: [HomeModule],
})
export class AppModule {}
