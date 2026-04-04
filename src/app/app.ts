import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Effect } from './effect/effect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Effect],
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

  submit(email: string) {
    console.log(email);
  }

  isLoggedIn: boolean = true;
}
