import { Component, input } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  title = input<string>();
  description = input<string>();
}
