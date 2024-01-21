import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { animation } from '@angular/animations';
import { slideInAnimation } from './route.animations';
import { HomeComponent } from './home/home.component';
import { MenuStateService } from './../../src/app/menu-state.service';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home Page' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MenuStateService],
})
export class AppRoutingModule {}
