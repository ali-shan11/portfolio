import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div class="container mx-auto flex h-16 items-center justify-between px-4">
        <div class="flex items-center gap-2">
          <a routerLink="/" class="text-xl font-bold tracking-tighter">Ali Shan</a>
        </div>
        <nav class="hidden md:flex gap-8 text-sm font-medium text-white/60">
          <a routerLink="/" fragment="home" class="transition-colors hover:text-white cursor-pointer">Home</a>
          <a routerLink="/" fragment="about" class="transition-colors hover:text-white cursor-pointer">About</a>
          <a routerLink="/" fragment="skills" class="transition-colors hover:text-white cursor-pointer">Skills</a>
          <a routerLink="/" fragment="projects" class="transition-colors hover:text-white cursor-pointer">Projects</a>
          <a routerLink="/" fragment="contact" class="transition-colors hover:text-white cursor-pointer">Contact</a>
        </nav>
        <div class="flex items-center gap-4">
          <a href="mailto:contact@alishan.dev" class="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {}
