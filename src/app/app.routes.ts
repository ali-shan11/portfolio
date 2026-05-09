import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjectDetailComponent } from './components/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' }
];
