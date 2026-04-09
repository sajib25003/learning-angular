import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
