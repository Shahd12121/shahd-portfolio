import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: NavItem[] = [];

  ngOnInit() {
    this.items = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'projects', href: '#projects' },
    {label: 'services' , href: '#services'},
    { label: 'Contact', href: '#contact' },
      ];

  }

}
