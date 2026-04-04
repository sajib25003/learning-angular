import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log('Count Value: ', this.count());
    });
  }

  increment() {
    this.count.update((c) => c + 1);
  }
}
