import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParallaxColumnsComponent } from './components/parallax-columns/parallax-columns.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParallaxColumnsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'parallax-columns-demo';
}
