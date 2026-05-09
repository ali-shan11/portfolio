import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-12 md:py-24">
      <div class="space-y-4 mb-12 text-center md:text-left">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
        <p class="text-white/60 md:text-lg max-w-[800px]">
          A selection of projects that showcase my ability to build end-to-end solutions.
        </p>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div *ngFor="let project of projects" [routerLink]="['/project', project.id]" class="group cursor-pointer relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:bg-white/[0.07] hover:border-emerald-500/50">
          <div class="aspect-video bg-white/5 overflow-hidden flex items-center justify-center">
            <img *ngIf="project.image" [src]="project.image" [alt]="project.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div *ngIf="!project.image" class="text-4xl font-bold opacity-10 group-hover:scale-110 transition-transform">{{project.name.charAt(0)}}</div>
          </div>
          <div class="p-6 space-y-2">
            <h3 class="text-xl font-bold group-hover:text-emerald-500 transition-colors">{{project.name}}</h3>
            <p class="text-sm text-white/60 line-clamp-2">{{project.description}}</p>
            <div class="flex flex-wrap gap-2 pt-4">
              <span *ngFor="let tech of project.tech | slice:0:3" class="text-[10px] uppercase tracking-wider text-emerald-500 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                {{tech}}
              </span>
              <span *ngIf="project.tech.length > 3" class="text-[10px] uppercase tracking-wider text-white/40 font-semibold">
                +{{project.tech.length - 3}} more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class ProjectsComponent {
  projects = PROJECTS;
}
