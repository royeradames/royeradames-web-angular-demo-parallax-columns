import { Component, OnInit, OnDestroy } from '@angular/core';
import { jarallax, jarallaxElement } from 'jarallax';

@Component({
  selector: 'app-parallax-columns',
  templateUrl: './parallax-columns.component.html',
  styleUrl: './parallax-columns.component.scss',
})
export class ParallaxColumnsComponent implements OnInit, OnDestroy {
  private parallaxElements: NodeListOf<Element> | null = null;

  ngOnInit(): void {
    // Early guard: Wait for DOM to be ready
    setTimeout(() => {
      this.initializeParallax();
    }, 100);
  }

  private initializeParallax(): void {
    // Early guard: Check if DOM is ready
    if (!document.querySelector) return;

    // Get all parallax columns
    this.parallaxElements = document.querySelectorAll('.parallax-column');

    // Early guard: Check if columns exist
    if (!this.parallaxElements.length) {
      console.warn('Parallax initialization failed - columns not found');
      return;
    }

    // Initialize jarallax with alternating directions
    this.parallaxElements.forEach((element, index) => {
      const isOdd = (index + 1) % 2 === 1;
      const speed = isOdd ? -0.3 : 0.3; // Odd columns move UP, even columns move DOWN

      jarallax(element as HTMLElement, {
        speed: speed,
        imgElement: '.column-content',
        disableParallax: /iPad|iPhone|iPod|Android/, // Disable on mobile for performance
      });
    });
  }

  ngOnDestroy(): void {
    // Clean up jarallax instances
    if (this.parallaxElements) {
      this.parallaxElements.forEach((element) => {
        jarallax(element as HTMLElement, 'destroy');
      });
    }
  }
}
