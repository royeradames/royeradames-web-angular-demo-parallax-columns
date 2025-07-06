import { Component } from '@angular/core';
import { ParallaxColumnsComponent } from './components/parallax-columns/parallax-columns.component';

@Component({
  selector: 'app-root',
  imports: [ParallaxColumnsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'parallax-columns-demo';
}
