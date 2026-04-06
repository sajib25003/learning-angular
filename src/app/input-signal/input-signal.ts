import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-signal',
  imports: [],
  templateUrl: './input-signal.html',
  styleUrl: './input-signal.css',
})
export class InputSignal {
  name = input<string>();
}
