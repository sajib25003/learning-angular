import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterLinkWithHref,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule, HeaderComponent, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private store: Store) {}
}
