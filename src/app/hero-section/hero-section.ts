import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
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
export class HeroSection implements AfterViewInit, OnDestroy {
  @ViewChild('typedText', {
    static: false,
  })
  typedTextEl?: ElementRef<HTMLElement>;
  private typed?: Typed;

  ngAfterViewInit() {
    if (!this.typedTextEl) {
      return;
    }

    this.typed = new Typed(this.typedTextEl.nativeElement, {
      strings: [
        'szoftverfejlesztő',
      ],
      typeSpeed: 70,
      showCursor: true,
      cursorChar: '|',
      backSpeed: 0,
      smartBackspace: false,
      loop: false,
      onComplete: () => {
        this.typed?.cursor?.classList.remove('typed-cursor');
      },
    });
  }

  ngOnDestroy() {
    this.typed?.destroy();
  }
}
