import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { InputSignal } from './input-signal/input-signal';
// import { CounterStore } from './core/store/counter';
import { UserStore } from './core/store/user';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, CommonModule, InputSignal],
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(public userStore: UserStore) {}
  // constructor(public counterStore: CounterStore) {}

  // protected readonly title = signal('angular-ekart');
  // username: string = 'Angular';
  // lName = 'ashik';
  // uName = 'SAJIB';
  // today = new Date();
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
