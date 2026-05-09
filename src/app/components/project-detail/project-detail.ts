import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="project" class="py-12 md:py-24 space-y-12 animate-in fade-in duration-700">
      <!-- Back Button -->
      <a routerLink="/" class="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to projects
      </a>

      <!-- Hero Header -->
      <div class="space-y-6">
        <h1 class="text-4xl font-extrabold tracking-tighter sm:text-6xl">{{project.name}}</h1>
        <div class="flex flex-wrap gap-3">
          <span *ngFor="let tech of project.tech" class="rounded-full bg-emerald-500/10 px-4 py-1 text-sm text-emerald-500 border border-emerald-500/20">
            {{tech}}
          </span>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid gap-12 lg:grid-cols-3">
        <div class="lg:col-span-2 space-y-12">
          <!-- Image Section -->
          <div class="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
            <img *ngIf="project.image" [src]="project.image" [alt]="project.name" class="w-full h-full object-cover">
            <div *ngIf="!project.image" class="text-9xl font-bold opacity-10">{{project.name.charAt(0)}}</div>
          </div>

          <!-- Description -->
          <div class="space-y-4">
            <h2 class="text-2xl font-bold tracking-tight">Overview</h2>
            <p class="text-white/60 text-lg leading-relaxed">{{project.fullDescription}}</p>
          </div>

          <!-- Requirements -->
          <div class="space-y-4">
            <h2 class="text-2xl font-bold tracking-tight">Key Requirements</h2>
            <ul class="grid gap-3 sm:grid-cols-2">
              <li *ngFor="let req of project.requirements" class="flex items-start gap-3 text-white/60">
                <svg class="mt-1 flex-shrink-0 text-emerald-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{{req}}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Structure Section -->
          <div class="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-6 sticky top-24">
            <div class="space-y-4">
              <h3 class="text-xl font-bold">Project Structure</h3>
              <p class="text-sm text-white/60 leading-relaxed">{{project.structure}}</p>
            </div>

            <div class="pt-6 border-t border-white/10 space-y-4">
              <button class="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-colors">
                View Live Demo
              </button>
              <button class="w-full py-3 rounded-xl border border-white/10 bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
                View Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="!project" class="h-[60vh] flex flex-col items-center justify-center space-y-4">
      <h1 class="text-2xl font-bold">Project not found</h1>
      <a routerLink="/" class="text-emerald-500 hover:underline">Return to home</a>
    </div>
  `,
  styles: ``
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.project = PROJECTS.find(p => p.id === id);
      window.scrollTo(0, 0);
    });
  }
}
