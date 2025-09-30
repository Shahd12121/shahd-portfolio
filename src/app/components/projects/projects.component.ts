import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  projects = [
    {
      title: 'Landing Page',
      description: 'A modern and fully responsive landing page built with Html , css and Bootstrap, focusing on clean design and performance.',
      link: 'https://shahd12121.github.io/First-Landing-Page/'
    },
    {
      title: 'Restaurant',
      description: 'A modern and responsive restaurant website featuring menu items, customer testimonials, reservation form, and a visually appealing hero section.',
      link: 'https://shahd12121.github.io/Restaurant2/'
    },
    {
      title: 'Shopping Cart',
      description: 'A modern and responsive e-commerce website featuring a user-friendly shopping cart, product listings, interactive product details, and smooth checkout experience.',
      link: 'https://shahd12121.github.io/shopping-cart-app/'
    },
    {
      title: 'Avatar Store',
      description: 'A stylish single-page template showcasing products with a clean layout and modern design elements.',
      link: 'https://shahd12121.github.io/Avatar/'
    },
    {
      title: 'To-Do List App',
      description: 'A simple yet powerful task management application that allows users to add, track, and organize their daily tasks with ease.',
      link: 'https://github.com/Shahd12121/TodoList'
    },
    {
      title: 'App-Landing-page',
      description: 'A modern and responsive landing page showcasing a mobile app with sections for features, testimonials, and call-to-action.',
      link: 'https://shahd12121.github.io/app-landing-page/'
    }
  ];

  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate project cards one by one
    gsap.from(this.projectCards.toArray().map(c => c.nativeElement), {
      scrollTrigger: {
        trigger: this.projectCards.first.nativeElement,
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.9,
      ease: 'power2.out'
    });
  }
}
