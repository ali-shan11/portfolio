import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-12 md:py-24">
      <div class="space-y-4 mb-12">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Expertise</h2>
        <p class="text-white/60 md:text-lg max-w-[800px]">
          A comprehensive toolkit developed over 3 years of professional experience, focused on performance, scalability, and modern best practices.
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div *ngFor="let category of skillCategories" class="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h3 class="text-xl font-semibold">{{category.name}}</h3>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let skill of category.skills" class="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 border border-white/10">
              {{skill}}
            </span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend',
      skills: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'SCSS']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'NestJS', '.NET Core', 'Express']
    },
    {
      name: 'Database',
      skills: ['PostgreSQL', 'NoSQL', 'MongoDB', 'Redis']
    },
    {
      name: 'Mobile',
      skills: ['React Native']
    },
    {
      name: 'DevOps & Cloud',
      skills: ['Docker', 'AWS (Basic)', 'CI/CD Pipelines', 'Git']
    },
    {
      name: 'Architectures',
      skills: ['Microservices', 'REST APIs', 'Clean Architecture', 'SOLID']
    }
  ];
}
