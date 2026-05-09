import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="flex min-h-[70vh] flex-col items-center justify-center text-center py-12 md:py-24">
      <div class="space-y-4">
        <h2 class="text-sm font-medium tracking-widest text-emerald-500 uppercase">Available for work</h2>
        <h1 class="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Full Stack Developer <br/>
          <span class="text-white/40">Ali Shan</span>
        </h1>
        <p class="mx-auto max-w-[700px] text-white/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          3+ years of experience building high-performance web and mobile applications using modern technologies. 
          Specializing in scalable architecture and seamless user experiences.
        </p>
      </div>
      <div class="flex flex-col gap-4 mt-8 sm:flex-row">
        <a href="#projects" class="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90">
          View Projects
        </a>
        <a href="#contact" class="inline-flex h-11 items-center justify-center rounded-md border border-white/10 bg-transparent px-8 text-sm font-medium transition-colors hover:bg-white/5">
          Contact Me
        </a>
      </div>
    </section>
  `,
  styles: ``
})
export class HeroComponent {}
