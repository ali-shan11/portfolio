import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="py-12 md:py-24">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div class="space-y-4">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <div class="space-y-4 text-white/60 md:text-lg">
            <p>
              I am a dedicated Full Stack Developer with over 3 years of experience in creating robust and scalable software solutions. 
              My expertise spans across the entire development lifecycle, from designing intuitive user interfaces to architecting complex backend systems.
            </p>
            <p>
              I thrive in collaborative environments and am passionate about staying at the forefront of technology. 
              Whether it's building a web application with Angular or a mobile app with React Native, I focus on delivering clean, maintainable code and exceptional performance.
            </p>
            <p>
              Beyond coding, I have experience with containerization using Docker and a foundational understanding of AWS and CI/CD pipelines, ensuring that the applications I build are ready for the modern cloud landscape.
            </p>
          </div>
        </div>
        <div class="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 flex items-center justify-center">
           <!-- Placeholder for an image or a creative element -->
           <div class="text-white/20 text-6xl font-bold tracking-tighter opacity-10">ALI SHAN</div>
           <div class="absolute inset-0 flex items-center justify-center">
             <div class="w-32 h-32 rounded-full bg-emerald-500/20 blur-3xl"></div>
             <div class="w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
           </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class AboutComponent {}
