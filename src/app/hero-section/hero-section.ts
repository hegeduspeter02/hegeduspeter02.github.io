import { Component, OnInit } from '@angular/core';
import { TranslocoPipe, translate } from '@jsverse/transloco';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  imports: [
    AvatarModule,
    TranslocoPipe,
    ButtonModule,
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements OnInit {
  ngOnInit() {
    new Typed('.typed-element', {
      strings: [
        translate('hero.roles'),
      ],
      typeSpeed: 70,
    });
  }
}
