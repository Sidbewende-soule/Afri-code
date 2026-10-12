import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly el = inject(ElementRef);

  /** Mots dynamiques en alternance fluide dans le Hero */
  protected readonly dynamicWords = [
    'professionnelle',
    'numérique',
  ];
  protected readonly currentWord = signal(this.dynamicWords[0]);
  protected readonly wordState = signal<'in' | 'out'>('in');

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let index = 0;
      this.intervalId = setInterval(() => {
        this.wordState.set('out');
        setTimeout(() => {
          index = (index + 1) % this.dynamicWords.length;
          this.currentWord.set(this.dynamicWords[index]);
          this.wordState.set('in');
        }, 220);
      }, 3200);

      // Initialisation des animations au scroll
      setTimeout(() => {
        this.initScrollReveal();
      }, 150);
    }
  }

  private initScrollReveal(): void {
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = this.el.nativeElement.querySelectorAll('.reveal-on-scroll');
    elements.forEach((elem: Element) => this.observer?.observe(elem));
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
