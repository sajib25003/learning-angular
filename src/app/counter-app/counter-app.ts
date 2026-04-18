import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppState, selectCounter } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-app',
  imports: [CommonModule],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  counter$!: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCounter);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
