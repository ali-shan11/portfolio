import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-white/10 py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p class="text-sm text-white/40">
            © 2026 Ali Shan. Built with Angular & Tailwind CSS.
          </p>
          <div class="flex gap-6 text-sm text-white/40">
            <a href="https://github.com/alishan" target="_blank" class="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/alishan" target="_blank" class="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {}
