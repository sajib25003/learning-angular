import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
