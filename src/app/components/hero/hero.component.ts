import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
 
})
export class HeroComponent implements OnInit {
  
  showMsg1 = false;
  showMsg2 = false;
  showMsg3 = false;
  showButton = false;

  ngOnInit(): void {
    // ظهور الرسائل واحدة واحدة
    setTimeout(() => this.showMsg1 = true, 1000);
    setTimeout(() => this.showMsg2 = true, 2800);
    setTimeout(() => this.showMsg3 = true, 4000);
    setTimeout(() => this.showButton = true, 5500);
  }
}
