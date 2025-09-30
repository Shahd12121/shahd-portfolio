import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {

  services = [
    { title: 'Web Development', description: 'Building responsive and modern websites with clean code and best practices.', image: 'assets/images/image2.png' },
    { title: 'UI/UX Design', description: 'Creating user-friendly interfaces with aesthetic design and seamless experience.', image: 'assets/images/image3.png' },
    { title: 'Responsive Design', description: 'Ensuring your applications look great on all devices and screen sizes.', image: 'assets/images/image4.png' },
    { title: 'Angular Projects', description: 'Creating dynamic and interactive web applications using Angular 17.', image: 'assets/images/Angular-projects.png' },
    { title: 'E-commerce Development', description: 'Build an interactive shopping cart where users can add/remove products with instant total updates.', image: 'assets/images/image5.png' },
    { title: 'SEO Optimization', description: 'Improve your website’s search engine ranking to get more visibility and traffic.', image: 'assets/images/image6.png' }
  ];

  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

  
    gsap.from(this.serviceCards.toArray().map(c => c.nativeElement), {
      scrollTrigger: {
        trigger: this.serviceCards.first.nativeElement,
        start: 'top 85%',
      },
      opacity: 0,
      y: 50,           
      stagger: 0.3,    
      duration: 1.2,
      ease: 'power2.out'
    });
  }
}
