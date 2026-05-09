import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="py-12 md:py-24">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
          <p class="mx-auto max-w-[600px] text-white/60 md:text-xl">
            I'm currently looking for new opportunities. My inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        <div class="flex gap-4 pt-4">
          <a href="mailto:contact@alishan.dev" class="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90">
            Send an Email
          </a>
          <a href="https://linkedin.com/in/alishan" target="_blank" class="inline-flex h-11 items-center justify-center rounded-md border border-white/10 bg-transparent px-8 text-sm font-medium transition-colors hover:bg-white/5">
            LinkedIn
          </a>
          <a href="https://github.com/alishan" target="_blank" class="inline-flex h-11 items-center justify-center rounded-md border border-white/10 bg-transparent px-8 text-sm font-medium transition-colors hover:bg-white/5">
            GitHub
          </a>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class ContactComponent {}
