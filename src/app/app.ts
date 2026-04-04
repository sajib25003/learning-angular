import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-ekart');

  count = 0;

  helloWorld() {
    console.log('inside hello world!');
  }

  handleClick() {
    console.log('Button Clicked!');
    this.helloWorld();
  }
}
