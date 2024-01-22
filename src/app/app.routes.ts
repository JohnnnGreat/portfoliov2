import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { animation } from '@angular/animations';
import { slideInAnimation } from './route.animations';
import { HomeComponent } from './home/home.component';
import { MenuStateService } from './menu-state.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home Page' } },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'My Projects' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MenuStateService],
})
export class AppRoutingModule {}
