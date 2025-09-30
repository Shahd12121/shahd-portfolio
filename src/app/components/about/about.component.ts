import { CommonModule } from '@angular/common';
import { Component, signal, ElementRef, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Feature {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {

  // Main texts
  aboutIntro = signal(`
    I'm <span class="highlight">Shahd Al-Numany</span>, a passionate Frontend Developer specializing in Angular, 
    focused on creating modern, responsive, and user-friendly web applications. 
    I love turning creative ideas into digital solutions that balance design with performance.
  `);

  aboutCommitment = signal(`
    With a commitment to clean code and attention to detail, I make sure every project 
    is visually appealing, fast, and accessible. My aim is to deliver experiences 
    that truly add value and impact.
  `);

  aboutExplore = signal(`
    Outside of coding, I constantly explore new technologies and industry trends 
    to stay up-to-date and deliver innovative solutions for clients and users alike.
  `);

  // Features
  features: Feature[] = [
    { icon: 'pi pi-desktop', title: 'Responsive' },
    { icon: 'pi pi-code', title: 'Clean Code' },
    { icon: 'pi pi-palette', title: 'UI/UX' },
    { icon: 'pi pi-clock', title: 'Performance' },
  ];

  // Button links
  contactLink = signal('#contact');
  projectsLink = signal('#projects');

  // References
  @ViewChildren('paragraph') paragraphs!: QueryList<ElementRef>;
  @ViewChildren('featureBox') featureBoxes!: QueryList<ElementRef>;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Animating paragraphs one by one on scroll
    gsap.from(this.paragraphs.toArray().map(p => p.nativeElement), {
      scrollTrigger: {
        trigger: this.paragraphs.first.nativeElement,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Animating feature boxes (one after another, no move)
    gsap.from(this.featureBoxes.toArray().map(f => f.nativeElement), {
      scrollTrigger: {
        trigger: this.featureBoxes.first.nativeElement,
        start: 'top 80%',
      },
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out'
    });
  }
}
