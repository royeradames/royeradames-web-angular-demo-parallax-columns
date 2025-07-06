import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parallax-columns',
  templateUrl: './parallax-columns.component.html',
  styleUrl: './parallax-columns.component.scss',
})
export class ParallaxColumnsComponent implements OnInit, OnDestroy {
  private scrollListener?: () => void;
  private parallaxContainer?: HTMLElement;

  ngOnInit() {
    // Wait for the view to initialize
    setTimeout(() => {
      this.initializeParallax();
    }, 100);
  }

  ngOnDestroy() {
    if (this.scrollListener && this.parallaxContainer) {
      this.parallaxContainer.removeEventListener('scroll', this.scrollListener);
    }
  }

  private initializeParallax() {
    this.parallaxContainer = document.querySelector(
      '.parallax-container'
    ) as HTMLElement;

    if (!this.parallaxContainer) {
      console.error('Parallax container not found');
      return;
    }

    console.log('Parallax initialized successfully');

    this.scrollListener = () => {
      const scrolled = this.parallaxContainer!.scrollTop;
      const containerHeight = this.parallaxContainer!.clientHeight;
      const columns = document.querySelectorAll('.parallax-column');

      columns.forEach((column, index) => {
        const columnElement = column as HTMLElement;
        const columnContent = columnElement.querySelector(
          '.column-content'
        ) as HTMLElement;

        if (columnContent) {
          const columnNumber = index + 1;
          const isOdd = columnNumber % 2 === 1;

          // Parallax speed
          const parallaxSpeed = 0.15;

          // Calculate transform based on whether column is odd or even
          let transform = isOdd
            ? -scrolled * parallaxSpeed // Odd columns move UP (negative direction)
            : scrolled * parallaxSpeed; // Even columns move DOWN (positive direction)

          // Limit the transform to prevent excessive white space
          const maxTransform = containerHeight * 0.25; // Limit to 25% of container height
          transform = Math.max(
            -maxTransform,
            Math.min(maxTransform, transform)
          );

          columnContent.style.transform = `translateY(${transform}px)`;

          // Debug logging (reduced frequency)
          if (scrolled > 0 && scrolled % 300 === 0) {
            console.log(
              `Column ${columnNumber} (${
                isOdd ? 'odd' : 'even'
              }): transform = ${transform}px`
            );
          }
        }
      });
    };

    this.parallaxContainer.addEventListener('scroll', this.scrollListener);

    // Trigger initial calculation
    this.scrollListener();
  }
}
