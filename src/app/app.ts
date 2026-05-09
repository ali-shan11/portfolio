import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <app-header></app-header>
      
      <main class="container mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `
})
export class App {}
