import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { SkillsComponent } from '../../components/skills/skills';
import { ProjectsComponent } from '../../components/projects/projects';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <div class="space-y-24">
      <app-hero id="home"></app-hero>
      <app-about id="about"></app-about>
      <app-skills id="skills"></app-skills>
      <app-projects id="projects"></app-projects>
      <app-contact id="contact"></app-contact>
    </div>
  `,
  styles: ``
})
export class HomeComponent {}
