import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Effect } from './effect/effect';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-ekart');

  lName = 'ashik';
  uName = 'SAJIB';

  today = new Date();

  // count = 0;

  // helloWorld() {
  //   console.log('inside hello world!');
  // }

  // handleClick() {
  //   console.log('Button Clicked!');
  //   this.helloWorld();
  // }

  // submit(email: string) {
  //   console.log(email);
  // }

  // isLoggedIn: boolean = true;
}
